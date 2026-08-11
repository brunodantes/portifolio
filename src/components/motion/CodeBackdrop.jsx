import React from 'react';

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

export function CodeBackdrop({columns=3,rows=46,opacity=0.10,reveal=true,color='var(--green-500)',speed=64,fixed:isFixed=true}){
  const [p,setP]=React.useState({x:-9999,y:-9999});
  React.useEffect(()=>{
    if(!reveal)return;
    const m=e=>setP({x:e.clientX,y:e.clientY});
    window.addEventListener('pointermove',m,{passive:true});
    return ()=>window.removeEventListener('pointermove',m);
  },[reveal]);
  const cols=Array.from({length:columns},(_,i)=>i);
  const sheet=(bright)=>React.createElement('div',{
    style:{position:'absolute',inset:0,display:'grid',
      gridTemplateColumns:'repeat('+columns+',1fr)',gap:'var(--s-8)',padding:'0 var(--s-6)',
      WebkitMaskImage:bright
        ?'radial-gradient(240px circle at '+p.x+'px '+p.y+'px,#000 0%,transparent 70%)'
        :'linear-gradient(180deg,transparent 0%,#000 18%,#000 72%,transparent 100%)',
      maskImage:bright
        ?'radial-gradient(240px circle at '+p.x+'px '+p.y+'px,#000 0%,transparent 70%)'
        :'linear-gradient(180deg,transparent 0%,#000 18%,#000 72%,transparent 100%)'}},
    cols.map(i=>React.createElement('pre',{key:i,
      style:{margin:0,fontFamily:'var(--font-mono)',fontSize:11,lineHeight:1.7,whiteSpace:'pre',
        color:bright?color:'var(--ink-300)',opacity:bright?0.85:opacity,
        animation:'ds-code-drift '+(speed+i*11)+'s linear infinite',
        animationDelay:(-i*9)+'s'}},column(i+1,rows))));
  return React.createElement('div',{'aria-hidden':true,
    style:{position:isFixed?'fixed':'absolute',inset:0,zIndex:0,overflow:'hidden',pointerEvents:'none'}},
    sheet(false),reveal?sheet(true):null,
    React.createElement('style',null,
      '@keyframes ds-code-drift{from{transform:translateY(0)}to{transform:translateY(-50%)}}'));
}
