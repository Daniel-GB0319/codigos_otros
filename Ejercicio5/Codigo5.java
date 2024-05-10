package Ejercicio5;

import java.util.Scanner;

public class Codigo5 {

  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    System.out.print("Introduzca un número: "); // Solicita al usuario que ingrese un número
    String ni = s.nextLine();
    int c = Integer.parseInt(ni); // Convierte la cadena 'ni' en un entero

    int afo = 0;
    int noAfo = 0;

    while (c > 0) {
      int digito = c % 10;
      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
        afo++; // Incrementa el contador de dígitos afortunados
      } else {
        noAfo++; // Incrementa el contador de dígitos no afortunados
      }
      c /= 10; // Elimina el último dígito del número
    }

    if (afo > noAfo) {
      System.out.println("El " + ni + " es un número afortunado."); // Imprime si el número es afortunado
    } else {
      System.out.println("El " + ni + " no es un número afortunado.");
    }

    s.close();
  }
}
