export default function Button({ asChild = false, variant='primary', className='', children, ...props }) {
  const cls = ['btn', variant==='outline' ? 'btn-outline' : 'btn-primary', className].join(' ')
  if (asChild) return <a className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
