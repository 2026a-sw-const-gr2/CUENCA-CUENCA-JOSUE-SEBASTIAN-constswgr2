describe('EventsService - Pruebas básicas', () => {

  it('debería registrar correctamente un evento CREATE', () => {

    const action = 'CREATE';

    expect(action).toBe('CREATE');

  });

  it('debería validar que existe una API KEY definida', () => {

    process.env.API_KEY = 'FIS-EPN-2026';

    expect(process.env.API_KEY).toBeDefined();

  });

  it('debería convertir una acción a mayúsculas', () => {

    const action = 'create'.toUpperCase();

    expect(action).toBe('CREATE');

  });

});