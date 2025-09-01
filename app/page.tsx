export default function Page() {
  return (
    <main>
      <h1>POSEIDON JEWELRY</h1>
      <p>Онлайн-витрина ювелирных изделий. Скоро здесь будет каталог.</p>

      <h3>Контакты</h3>
      <ul>
        <li>WhatsApp/Тел: +1 (___) ___-____</li>
        <li>Email: info@poseidon.us.com</li>
        <li>Instagram: @poseidon.jewelry</li>
      </ul>

      <p style={{marginTop:24,fontSize:12,color:'#555'}}>
        © {new Date().getFullYear()} Poseidon Jewelry. Все права защищены.
      </p>
    </main>
  );
}
