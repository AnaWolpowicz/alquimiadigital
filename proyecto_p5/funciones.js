function preload() {
  fondo = loadImage('assets/fondocompleto.jpg');
}

//---------------------------------
function cargarLineas(){
	for (let i = 0; i < cantLinea; i++) {
		linea.push(new Linea(i));
	}
	//manito central
	 linea[0].iniciar(460, 470, 0.006, -20);
	 //ojo
	 linea[1].iniciar(213, 674, 0.003, -30);
	 //Pajarito
	 linea[2].iniciar(415, 770, 0.007, 50);
	 //ojoderecha
	 linea[3].iniciar(812, 276, 0.004, 40);
	 //Ventana pajaro
	 linea[4].iniciar(300, 570, 0.002, 25);
	 //ojo bajo
	 linea[5].iniciar(380, 887, 0.005, -30);
	 //mano izq arriba
	 linea[6].iniciar(75, 402, 0.006, -30);

}

function actualizarLineas(){
	for (let i = 0; i < linea.length; i++) {
	    linea[i].actualizar();
	    linea[i].dibuja();
	  }
}

function mousePressedLineas(){
	for (let i = 0; i < linea.length; i++) {
	    linea[i].revisarClick();
	  }
}
//-----------------------------------------------
function cargarPendulos(){
	for (let i = 0; i < cantPendulos; i++) {
		pendulo.push(new Pendulo(i));
	}
	 pendulo[0].iniciar(78, 260, 0.001);
	 pendulo[1].iniciar(210, 600, 0.001);
	 pendulo[2].iniciar(980, 600, 0.001);
	 pendulo[3].iniciar(827, 234, 0.001);
	 pendulo[4].iniciar(415, 610, 0.002);
	 pendulo[5].iniciar(665, 735, 0.0005);
	 pendulo[6].iniciar(425, 345, 0.003);

}

function actualizarPendulos(){
	for (let i = 0; i < pendulo.length; i++) {
	    pendulo[i].actualizar();
	    pendulo[i].dibujar();
	  }
}
function mousePressedPendulos(){
	for (let i = 0; i < pendulo.length; i++) {
	    pendulo[i].revisarClick();
	  }
}
//-----------------------------------------------
function cargarGiradores(){
	for (let i = 0; i < cantGiradores; i++) {
		girador.push(new Girador(i));
	}
	 girador[0].iniciar(790, 500, 0.01);
	 girador[1].iniciar(90, 610, 0.008);
	 girador[2].iniciar(732, 670, 0.001);
	 girador[3].iniciar(1042, 480, 0.001);
	 girador[4].iniciar(1064, 450, 0.001);
	 girador[5].iniciar(264, 748, 0.01);

}

function actualizarGiradores(){
	for (let i = 0; i < girador.length; i++) {
	    girador[i].actualizar();
	    girador[i].dibujar();
	  }
}
function mousePressedGiradores(){
	for (let i = 0; i < girador.length; i++) {
	    girador[i].revisarClick();
	  }
}
//-----------------------------------------------
function cargarEstaticos(){

  for (let i = 0; i < cantEstaticos; i++) {
		estatico.push(new Estatico( i , 100));
	}
  // puerta
  estatico[0].iniciar(1000, 727, 80, 90);
  estatico[0].iniciar(1002, 727, 90, 100);
  estatico[0].iniciar(1004, 727, 100, 110);
  estatico[0].iniciar(1006, 727, 110, 120);
  estatico[0].iniciar(1008, 727, 120, 130);
  estatico[0].iniciar(1010, 727, 130, 140);

  // OJO bajo intermitente a oscuro
  estatico[1].iniciar(350, 675, 20, 30);
  estatico[1].iniciar(350, 678, 30, 40);
  estatico[1].iniciar(350, 670, 40, 50);
  estatico[1].iniciar(350, 672, 50, 60);
  estatico[1].iniciar(350, 670, 60, 70);
  estatico[1].iniciar(350, 673, 70, 80);
  estatico[2].iniciar(350, 672, 80, 100);
  estatico[1].iniciar(350, 673, 100, 120);
  estatico[2].iniciar(350, 670, 120, 140);
  estatico[2].iniciar(350, 673, 140, 150);

  // ojo centro
  estatico[3].iniciar(440, 230, 40, 50);
  estatico[3].iniciar(440, 240, 50, 60);
  estatico[3].iniciar(440, 230, 60, 70);
  estatico[3].iniciar(440, 240, 70, 80);
  estatico[3].iniciar(440, 230, 200, 210);
  estatico[3].iniciar(440, 240, 210, 220);
  estatico[3].iniciar(440, 230, 220, 230);
  estatico[3].iniciar(440, 240, 230, 240);

  //dado
  estatico[4].iniciar(790, 500, 0, 10);
  estatico[5].iniciar(790, 502, 10, 20);
  estatico[6].iniciar(790, 504, 20, 30);
  estatico[7].iniciar(790, 506, 30, 40);

  //personaje
  estatico[8].iniciar(990, 380, 0, 10);
  estatico[8].iniciar(970, 390, 10, 20);
  estatico[8].iniciar(960, 400, 20, 30);
  estatico[8].iniciar(950, 410, 30, 40);
  estatico[8].iniciar(940, 420, 40, 50);
  estatico[8].iniciar(930, 430, 50, 60);
  estatico[8].iniciar(927, 440, 60, 70);
  estatico[8].iniciar(925, 450, 70, 80);
  estatico[8].iniciar(923, 460, 80, 90);
  estatico[8].iniciar(922, 470, 90, 100);
  estatico[8].iniciar(920, 480, 100, 110);
  estatico[8].iniciar(910, 490, 110, 120);
  estatico[8].iniciar(909, 500, 120, 130);
  estatico[8].iniciar(908, 510, 130, 140);
  estatico[8].iniciar(907, 520, 140, 150);
  estatico[8].iniciar(906, 530, 150, 160);
  estatico[8].iniciar(905, 540, 160, 170);
  estatico[8].iniciar(904, 550, 170, 180);
  estatico[8].iniciar(903, 560, 180, 190);
  estatico[8].iniciar(902, 570, 190, 200);
  estatico[8].iniciar(901, 580, 200, 210);
  estatico[8].iniciar(901, 590, 210, 220);
  estatico[8].iniciar(901, 600, 220, 230);
  estatico[8].iniciar(901, 610, 230, 240);
  estatico[8].iniciar(900, 620, 240, 250);
  estatico[8].iniciar(899, 630, 250, 260);
  estatico[8].iniciar(898, 640, 260, 270);
  estatico[8].iniciar(897, 650, 270, 280);
  estatico[8].iniciar(896, 660, 280, 290);
  estatico[8].iniciar(895, 670, 290, 300);
  estatico[8].iniciar(894, 680, 300, 310);
  estatico[8].iniciar(893, 690, 310, 320);
  estatico[8].iniciar(893, 695, 320, 330);
  estatico[8].iniciar(892, 700, 330, 340);
  estatico[8].iniciar(891, 710, 340, 350);
  estatico[8].iniciar(890, 720, 350, 360);
  estatico[8].iniciar(889, 730, 360, 370);
  estatico[8].iniciar(888, 740, 370, 380);
  estatico[8].iniciar(887, 750, 380, 390);
  estatico[8].iniciar(886, 760, 390, 400);
  estatico[8].iniciar(885, 770, 400, 410);
  estatico[8].iniciar(884, 780, 410, 420);
  estatico[8].iniciar(883, 790, 420, 430);
  estatico[8].iniciar(882, 800, 430, 440);

// Pajaro Alas

  estatico[9].iniciar(730, 550, 0, 10);
  estatico[10].iniciar(730, 530, 10, 20);
  estatico[9].iniciar(730, 550, 20, 30);
  estatico[10].iniciar(730, 530, 30, 40);
  estatico[9].iniciar(730, 550, 40, 50);
  estatico[10].iniciar(730, 530, 50, 60);

// Damero
  estatico[11].iniciar(222, 810, 70, 90);
  estatico[12].iniciar(222, 809, 90, 110);
  estatico[11].iniciar(222, 810, 110, 130);
  estatico[12].iniciar(222, 809, 130, 150);
  estatico[11].iniciar(222, 810, 150, 170);
  estatico[12].iniciar(222, 809, 170, 190);

}

function actualizarEstaticos(){

  contFrame ++;
	for (let i = 0; i < estatico.length; i++) {
	    estatico[i].actualizar(contFrame);
	    estatico[i].dibujar();
	  }
}

function mousePressedEstaticos(){
	for (let i = 0; i < estatico.length; i++) {
	    estatico[i].revisarClick();
	  }
}
