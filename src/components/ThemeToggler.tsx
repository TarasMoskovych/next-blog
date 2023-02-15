import { useThemeToggle } from 'src/hooks';

const ThemeToggler = () => {
  const { darkMode, onThemeChange } = useThemeToggle();

  return (
    <div className='nb-theme-toggler'>
      <input
        className='nb-theme-toggler__checkbox'
        type='checkbox'
        onChange={onThemeChange}
        defaultChecked={darkMode}
      />
    </div>
  );
};

export default ThemeToggler;
