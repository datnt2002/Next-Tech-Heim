import { cn } from '@/utils/cn'

interface DropdownItemProps {
  icon: string
  label?: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const DropdownItem = ({ icon, label, className, onClick }: DropdownItemProps) => {
  return (
    <div className={cn('flex gap-4', className)} onClick={onClick}>
      <img src={icon} alt="profile" />
      <p className="font-inter text-lg">{label}</p>
    </div>
  )
}

export default DropdownItem
