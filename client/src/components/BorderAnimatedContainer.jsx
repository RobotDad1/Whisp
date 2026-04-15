//SOURCE:-  https://cruip-tutorials.vercel.app/animated-gradient-border/
import { useThemeStore } from "../store/useThemeStore";

function BorderAnimatedContainer({ children }) {
  const { theme } = useThemeStore();

  const glassClasses = "[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.cyan.500)_86%,_theme(colors.cyan.300)_90%,_theme(colors.cyan.500)_94%,_theme(colors.slate.600/.48))_border-box] animate-border";
  
  const darkClasses = "[background:linear-gradient(45deg,#0b141a,#0b141a)_padding-box,conic-gradient(from_var(--border-angle),#0b141a_80%,_#FFD700_86%,_#FFC107_90%,_#FFD700_94%,_#0b141a)_border-box] animate-border";
  
  const whatsappClasses = "[background:linear-gradient(45deg,#ffffff,#ffffff)_padding-box,conic-gradient(from_var(--border-angle),#ffffff_80%,_#00a884_86%,_#00a884_90%,_#00a884_94%,_#ffffff)_border-box] animate-border shadow-[0_0_15px_rgba(0,168,132,0.1)]";

  return (
    <div className={`w-full h-full rounded-2xl border border-transparent flex overflow-hidden transition-all duration-300 ease-in-out
      ${theme === 'glass' ? glassClasses : ''}
      ${theme === 'dark' ? darkClasses : ''}
      ${theme === 'whatsapp' ? whatsappClasses : ''}
    `}>
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;