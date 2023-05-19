export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export class ThemeService {
  private static SESSION_KEY = 'nb:theme';

  static timeout: NodeJS.Timeout;

  static getTheme(): Themes {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(this.SESSION_KEY) as Themes) || Themes.LIGHT;
    }

    return Themes.LIGHT;
  }

  static isDarkMode(theme: Themes): boolean {
    return theme === Themes.DARK;
  }

  static getNewTheme(theme: Themes): Themes {
    return this.isDarkMode(theme) ? Themes.LIGHT : Themes.DARK;
  }

  static applyTheme(theme: Themes, animation = false): void {
    const darkMode = this.isDarkMode(theme);
    const container = document.querySelector('.root') as HTMLElement;
    const clipper = document.querySelector('.theme-clipper') as HTMLElement;
    let clipperContainer: HTMLElement;

    if (!animation) {
      container.classList.toggle('dark', darkMode);
    } else {
      clearTimeout(this.timeout);

      document.body.classList.add('theme-animation');
      localStorage.setItem(this.SESSION_KEY, theme);

      clipper.innerHTML = container.outerHTML;
      clipper.classList.toggle('animated');
      clipperContainer = clipper.querySelector('.root') as HTMLElement;
      clipperContainer.classList.toggle('dark', darkMode);
      clipperContainer.scroll({ top: window.scrollY });

      setTimeout(() => {
        container.classList.toggle('dark', darkMode);
        clipper.innerHTML = '';
        clipper.classList.remove('animated');
      }, 1000);

      this.timeout = setTimeout(() => document.body.classList.remove('theme-animation'), 1200);
    }
  }
}
