import DropdownItem from '@/components/atoms/Dropdown'
import useUserStore from '@/store/user'
import { Button, Dropdown, MenuProps } from 'antd'

const items: MenuProps['items'] = [
  {
    key: 'orders',
    label: (
      <DropdownItem
        icon={'/assets/icons/shopping/order_icon.svg'}
        label="Orders"
        // onClick={() => navigate("/cart")}
      />
    ),
  },
  {
    key: 'wishlist',
    label: <DropdownItem icon={'/assets/icons/like/heart_outline_icon.svg'} label="Wish List" />,
  },
  {
    key: 'payments',
    label: <DropdownItem icon={'/assets/icons/crypto/payment_icon.svg'} label="Payments" />,
  },
  {
    key: 'logout',
    label: (
      <DropdownItem
        icon={'/assets/icons/arrow/logout_icon.svg'}
        label="Log out"
        onClick={() => {
          // store.dispatch(logoutAction());
        }}
      />
    ),
  },
]
const ProfileMenuDropdown = () => {
  const { user } = useUserStore()
  return (
    <Dropdown
      className="bg-transparent"
      dropdownRender={(menu) => {
        return (
          <div className="mt-[31px] bg-white">
            <div
              className="cursor-pointer pt-4 px-4"
              // onClick={() => navigate("/detail")}
            >
              <DropdownItem icon={'/assets/icons/user/profile_icon.svg'} label={user?.name} className="text-primary " />
              {user?.email && <p className="ml-10">{user?.email}</p>}
            </div>
            {menu}
          </div>
        )
      }}
      menu={{ items }}
      placement="bottomRight"
    >
      <Button
        className="border-none shadow-none"
        icon={<img className="" src="/assets/icons/user/user_icon.svg" alt="user_icon" />}
      />
    </Dropdown>
  )
}

export default ProfileMenuDropdown
