import React from 'react';
import './CodeBackdrop.css';

const DOTNET_LINES=[
'using Microsoft.AspNetCore.Builder;',
'using MuuM.Application.Trips;',
'',
'var builder = WebApplication.CreateBuilder(args);',
'',
'builder.Services.AddScoped<IOrderRepository, OrderRepository>();',
'builder.Services.AddSingleton<IFixSession, QuickFixSession>();',
'builder.Services.AddHostedService<OrderAccumulatorWorker>();',
'builder.Services.AddDatadog(o => o.Service = "order-generator-api");',
'',
'var app = builder.Build();',
'',
'app.MapPost("/orders", async (NewOrder order, IOrderService svc, CancellationToken ct) =>',
'{',
'    var result = await svc.SubmitAsync(order, ct);',
'    return result.ExecType switch',
'    {',
'        ExecType.New      => Results.Accepted($"/orders/{result.Id}", result),',
'        ExecType.Rejected => Results.UnprocessableEntity(result.Reason),',
'        _                 => Results.Problem("unknown exec type")',
'    };',
'})',
'.WithName("SubmitOrder")',
'.Produces<ExecutionReport>(StatusCodes.Status202Accepted);',
'',
'app.MapGet("/health", () => Results.Ok(new { status = "healthy" }));',
'app.Run();',
'',
'public sealed record NewOrder(string Symbol, decimal Price, int Quantity, Side Side);',
'',
'public sealed class OrderAccumulator : IOrderAccumulator',
'{',
'    private const decimal ExposureLimit = 100_000_000m;',
'    private readonly ConcurrentDictionary<string, decimal> _exposure = new();',
'',
'    public ExecutionReport Accumulate(NewOrder order)',
'    {',
'        var delta = order.Price * order.Quantity * (order.Side is Side.Buy ? 1 : -1);',
'        var next = _exposure.AddOrUpdate(order.Symbol, delta, (_, cur) => cur + delta);',
'',
'        if (Math.Abs(next) > ExposureLimit)',
'        {',
'            _exposure.AddOrUpdate(order.Symbol, 0m, (_, cur) => cur - delta);',
'            return ExecutionReport.Rejected(order, "exposure limit exceeded");',
'        }',
'',
'        return ExecutionReport.New(order, next);',
'    }',
'}',
'',
'public sealed class TradeEventConsumer : BackgroundService',
'{',
'    private readonly IConnection _connection;',
'',
'    protected override async Task ExecuteAsync(CancellationToken stoppingToken)',
'    {',
'        await using var channel = await _connection.CreateChannelAsync(cancellationToken: stoppingToken);',
'        await channel.QueueDeclareAsync("trades.settled", durable: true, exclusive: false);',
'',
'        var consumer = new AsyncEventingBasicConsumer(channel);',
'        consumer.ReceivedAsync += async (_, ea) =>',
'        {',
'            var evt = JsonSerializer.Deserialize<TradeSettled>(ea.Body.Span);',
'            await _handler.HandleAsync(evt!, stoppingToken);',
'            await channel.BasicAckAsync(ea.DeliveryTag, multiple: false);',
'        };',
'',
'        await channel.BasicConsumeAsync("trades.settled", autoAck: false, consumer);',
'    }',
'}',
'',
'_retryPolicy = Policy',
'    .Handle<Exception>()',
'    .WaitAndRetryAsync(',
'        retryCount: 3,',
'        sleepDurationProvider: attempt => TimeSpan.FromSeconds(Math.Pow(2, attempt)),',
'        onRetry: OnRetry);',
''
];

function column(seed,rows){
  const out=[];
  for(let i=0;i<rows;i++) out.push(DOTNET_LINES[(seed*17+i)%DOTNET_LINES.length]);
  return out.join('\n');
}

function CodeSheet({bright,columns,rows,speed,opacity,color,x,y}){
  const cols=Array.from({length:columns},(_,i)=>i);
  const vars=bright?{'--cb-columns':columns,'--cb-x':`${x}px`,'--cb-y':`${y}px`}:{'--cb-columns':columns};
  return (
    <div className={`code-backdrop-sheet code-backdrop-sheet--${bright?'bright':'dim'}`} style={vars}>
      {cols.map(i=>(
        <pre
          key={i}
          className={`code-backdrop-col code-backdrop-col--${bright?'bright':'dim'}`}
          style={{
            '--cb-speed':`${speed+i*11}s`,
            '--cb-delay':`${-i*9}s`,
            ...(bright?{'--cb-color':color}:{'--cb-opacity':opacity})
          }}
        >
          {column(i+1,rows)}
        </pre>
      ))}
    </div>
  );
}

export function CodeBackdrop({columns=3,rows=46,opacity=0.10,reveal=true,color='var(--green-500)',speed=64,fixed:isFixed=true}){
  const [p,setP]=React.useState({x:-9999,y:-9999});
  React.useEffect(()=>{
    if(!reveal)return;
    const m=e=>setP({x:e.clientX,y:e.clientY});
    window.addEventListener('pointermove',m,{passive:true});
    return ()=>window.removeEventListener('pointermove',m);
  },[reveal]);
  return (
    <div aria-hidden="true" className={`code-backdrop${isFixed?' code-backdrop--fixed':''}`}>
      <CodeSheet bright={false} columns={columns} rows={rows} speed={speed} opacity={opacity}/>
      {reveal?<CodeSheet bright columns={columns} rows={rows} speed={speed} color={color} x={p.x} y={p.y}/>:null}
    </div>
  );
}
