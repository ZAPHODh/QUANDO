import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { Button } from '../Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Description } from '../Description';

export type SendLinkModalProps = {
  link: string;
};

export const SendLinkModal = ({ link }: SendLinkModalProps) => {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
  };
  const handleShare = async () => {
    if (!navigator.share) return;

    await navigator.share({
      title: 'Venha jogar comigo!',
      url: link,
      text: 'Estou te convidando para jogar uma partida de QUANDO comigo',
    });
  };
  useEffect(() => {
    setVisible(visible);
  }, [visible, setVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible, setVisible]);
  return (
    <Styled.Wrapper visible={visible}>
      <Styled.Modal ref={modalRef}>
        <Heading as="h3">Compartilhe com seus amigos!</Heading>
        <div>img aqui</div>
        <div>img aqui</div>
        <div>img aqui</div>
        <div>img aqui</div>
        <div>img aqui</div>
        <div>img aqui</div>
        <div>img aqui</div>
        <div>img aqui</div>
        <div>img aqui</div>
        <Styled.SendContainer copied={copied}>
          <Description
            padding="7px"
            fontSize="13px"
            color="#f8ecc2"
            father="link"
          >
            {link}
          </Description>
          <Button width={'40px'} onClick={handleCopy} reverse={copied}>
            <ContentCopyIcon />
          </Button>
        </Styled.SendContainer>
        <Button reverse width={'150px'} onClick={handleShare}>
          Compartilhar
        </Button>
      </Styled.Modal>
    </Styled.Wrapper>
  );
};
