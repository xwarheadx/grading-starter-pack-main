import { Header, Footer } from 'components/common/common';
import { CommonProps } from '../../../types/types';

function MainLayout({ children } : CommonProps) : JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>);
}

export default MainLayout;
