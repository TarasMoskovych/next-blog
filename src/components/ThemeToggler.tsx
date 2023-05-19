import { useTheme } from 'src/context/ThemeContext';

const ThemeToggler = () => {
  const { toggleTheme, darkMode, loaded } = useTheme();

  return (
    <div className='nb-theme-toggler'>
      {loaded &&
        <input
          title='Change theme'
          className='nb-theme-toggler__checkbox'
          type='checkbox'
          onChange={toggleTheme}
          defaultChecked={darkMode}
        />
      }
    </div>
  );
};

export default ThemeToggler;
