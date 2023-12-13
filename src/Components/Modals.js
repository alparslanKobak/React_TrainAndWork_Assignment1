import KtCoin from '../images/KTCOIN.png'
import LoginModal from './AllModals/LoginModal';
import ContactModal from './AllModals/ContactModal';
import GuidanceModal from './AllModals/GuidanceModal';
import FAQModal from './AllModals/FAQModal';
import RegisterModal from './AllModals/RegisterModal';
function Modals() {
    return (
        <>
            {/* Guidance Modal'ı */}
            <GuidanceModal />

            {/* Contact Modal'ı */}
            <ContactModal />

            {/* Login Modal'ı */}
            <LoginModal />

            {/* FAQ Modal'ı */}
            <FAQModal />

            {/* Register Modal'ı */}
            <RegisterModal />
            


        </>
    );
}

export default Modals;