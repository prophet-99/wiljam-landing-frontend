const getCellPhoneUtil = () => '+51932265652';

const redirectToWhatsAppUtil = () => {
  window.open(
    `https://api.whatsapp.com/send?phone=${getCellPhoneUtil()}&text=Deseo%20más%20informacion%20acerca%20de%20los%20servicios%20que%20brindan`,
    '_blank'
  );
};

export { getCellPhoneUtil, redirectToWhatsAppUtil };
