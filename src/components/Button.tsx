type Props = {
  label: string
  onClick: () => void
  // ?でオプショナルになる
  variant?: 'success' | 'info' | 'warn' | 'error' | 'default'
  isDisable?: boolean
}

export const Button = ({
  label,
  onClick,
  // 初期値をdefaultにしている
  variant = 'default',
  isDisable,
}: Props) => {
  const colors = {
    info: 'bg-blue-500 hover:bg-blue-700',
    success: 'bg-green-500 hover:bg-green-700',
    warn: 'bg-yellow-500 hover:bg-yellow-700',
    error: 'bg-red-500 hover:bg-red-700',
    default: 'bg-gray-500 hover:bg-gray-700',
  }

  return (
    <button
      className={`text-white font-bold py-2 px-4 rounded ${colors[variant]} ${
        isDisable && 'bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed'
      }`}
      onClick={onClick}
      disabled={isDisable}
    >
      {label}
    </button>
  )
}
