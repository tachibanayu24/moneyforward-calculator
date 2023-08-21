type Props = {
  id: string
  label: string
  onChange: () => void
  placeholder: string
}

export const TextField = ({ id, label, placeholder, onChange }: Props) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
