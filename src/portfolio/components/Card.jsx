export function Card({ className='', children }) {
  return <div className={['card', className].join(' ')}>{children}</div>
}
export function CardHeader({ children, className='' }) {
  return <div className={['px-6 pt-6', className].join(' ')}>{children}</div>
}
export function CardTitle({ children, className='' }) {
  return <h3 className={['text-base font-semibold', className].join(' ')}>{children}</h3>
}
export function CardContent({ children, className='' }) {
  return <div className={['px-6 pb-6', className].join(' ')}>{children}</div>
}
