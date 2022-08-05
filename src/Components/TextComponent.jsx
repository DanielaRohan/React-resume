import './CSS/text-component.scss'

export const TextComponent = function ({title,details,index,children}) {
  return (
    <div className='text-component' index={index}>
      <h3>{title}</h3>
      {details && <p dangerouslySetInnerHTML={{__html:details}}></p>}
      {children}
    </div>
  )
}