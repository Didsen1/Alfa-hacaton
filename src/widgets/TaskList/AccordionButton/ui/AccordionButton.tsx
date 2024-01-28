import { type FC } from 'react';
import { Typography } from '@alfalab/core-components-typography';
import { ChevronRightMIcon } from '@alfalab/icons-glyph/ChevronRightMIcon';
import styles from './AccordionButton.module.scss';

interface AccordionButtonProps {
  text: string;
  expanded: boolean;
  toggleExpanded: () => void;
}

const AccordionButton: FC<AccordionButtonProps> = ({ text, expanded, toggleExpanded }) => (
  <div className={styles.head}>
    <ChevronRightMIcon onClick={toggleExpanded} className={`${styles.icon} ${expanded ? styles.icon_active : ''}`} />
    <Typography.Text view="primary-small" tag="span" className={styles.text}>
      {text}
    </Typography.Text>
  </div>
);

export default AccordionButton;
