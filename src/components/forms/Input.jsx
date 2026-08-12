import './Input.css';

export function Input({label,hint,error,as='input',rows=4,className,...rest}){
  const Field=as;
  const fieldClasses=['field-control',error?'field-control--error':'',className].filter(Boolean).join(' ');
  return (
    <label className="field">
      {label?<span className="field-label">{label}</span>:null}
      <Field rows={as==='textarea'?rows:undefined} className={fieldClasses} {...rest}/>
      {(error||hint)?<span className={`field-note${error?' field-note--error':''}`}>{error||hint}</span>:null}
    </label>
  );
}
