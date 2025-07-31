import Button from '@/lib/components/atoms/Button/Button';
import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import style from './SkipButton.module.css';
import { cn } from '@/lib/utilities/cn';

export default function SkipButton({
  className,
}: React.ComponentProps<typeof Button>) {
  const dict = getDictionary('en');
  const target = '#main-content';
  const handleOnClick = () => {
    const mainContent = document.querySelector(target);
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`SkipButton: '${target}' element not found in the DOM.`);
      // Send to logging service: SkipButton: '#main-content' element not found in the DOM.
    }
  };
  return (
    <Button
      appearance="primary"
      className={cn(style.skipButton, className)}
      onClick={handleOnClick}
    >
      {dict.common.navigation.skipToMain}
    </Button>
  );
}
