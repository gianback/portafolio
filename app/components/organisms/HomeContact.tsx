export const HomeContact = () => {
  return (
    <section>
      <h2 className="text-5xl font-semibold uppercase">Contacto</h2>
      <p>Si estás interesado en contactarme no dudes en hacerlo!</p>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" placeholder="Jhon Doe" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="example@example.com" name="email" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
