const fs = require('fs');
const vm = require('vm');
const path = 'c:\\Users\\leyto\\Documents\\Visual Proyect C++ y Python\\Desarrollo WEB\\JavaScript\\Capitulo 3\\Historia de Cofla\\home copy.js';

describe('home copy.js (script + clases)', () => {
	// ...existing code...
	let fileContent;

	beforeAll(() => {
		fileContent = fs.readFileSync(path, 'utf8');
	});

	test('script run prints celular specifications for choice 1', () => {
		const sandbox = {
			alert: jest.fn(),
			document: { writeln: jest.fn() },
			// prompt sequence: first choose 1, then answer "si" to show specs
			prompt: jest.fn()
				.mockImplementationOnce(() => '1')
				.mockImplementationOnce(() => 'si'),
		};

		vm.createContext(sandbox);
		vm.runInContext(fileContent, sandbox);

		// prompt should have been called at least twice
		expect(sandbox.prompt.mock.calls.length).toBeGreaterThanOrEqual(2);

		// document.writeln should have been called with the celular info string somewhere
		const wroteSpecs = sandbox.document.writeln.mock.calls.some(call =>
			typeof call[0] === 'string' && call[0].includes('Estos son las especificaciones del celular')
		);
		expect(wroteSpecs).toBe(true);
	});

	test('celular and celularesAltaGamma classes exist and methods call alert with expected messages', () => {
		const sandbox = {
			alert: jest.fn(),
			document: { writeln: jest.fn() },
			// ensure script terminates: choose 1 then "si"
			prompt: jest.fn()
				.mockImplementationOnce(() => '1')
				.mockImplementationOnce(() => 'si'),
		};

		vm.createContext(sandbox);
		vm.runInContext(fileContent, sandbox);

		// classes should be available on the sandbox
		expect(typeof sandbox.celular).toBe('function');
		expect(typeof sandbox.celularesAltaGamma).toBe('function');

		// create instances directly in the sandbox context
		const Celular = sandbox.celular;
		const Alta = sandbox.celularesAltaGamma;

		const c = new Celular('Rojo', '120g', 'HD', '12MP', '4GB');
		// constructor sets properties; check camera resolution
		expect(c.resolucionDeCamara).toBe('12MP');

		// calling tomarFoto should invoke alert with the camera resolution
		c.tomarFoto();
		expect(sandbox.alert).toHaveBeenCalledWith(expect.stringContaining('12MP'));

		// test high-end phone second camera message too
		const g = new Alta('Negro', '200g', '4K', '64MP', '8GB', '32MP');
		// calling tomarFotoSegundaCamara should alert with the second camera resolution
		g.tomarFotoSegundaCamara();
		expect(sandbox.alert).toHaveBeenCalledWith(expect.stringContaining('32MP'));
	});
	// ...existing code...
});