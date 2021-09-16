type Props = {
  title?: string
}

export function SidebarItem(props: Props) {
  return (
    <div>{props.title}</div>
  )
}