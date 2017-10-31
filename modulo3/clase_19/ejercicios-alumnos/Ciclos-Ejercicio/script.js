/* 
  Ejercicio Bolas de Colores!

  El programa que tienes a continuación se trata de crear divs con diferentes colores que se cargan de manera aleatoria.

  La forma en como está escrito el código es ineficiente. Utiliza lo aprendido de ciclos para hacer este código más corto y simple.

*/

 
var divColor = '';
var rojo, verde, azul, colorRGB;

rojo = Math.floor(Math.random() * 256);
verde = Math.floor(Math.random() * 256);
azul = Math.floor(Math.random() * 256);
colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';

rojo = Math.floor(Math.random() * 256);
verde = Math.floor(Math.random() * 256);
azul = Math.floor(Math.random() * 256);
colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';

rojo = Math.floor(Math.random() * 256);
verde = Math.floor(Math.random() * 256);
azul = Math.floor(Math.random() * 256);
colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';

rojo = Math.floor(Math.random() * 256);
verde = Math.floor(Math.random() * 256);
azul = Math.floor(Math.random() * 256);
colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';

rojo = Math.floor(Math.random() * 256);
verde = Math.floor(Math.random() * 256);
azul = Math.floor(Math.random() * 256);
colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';

document.write(divColor);

