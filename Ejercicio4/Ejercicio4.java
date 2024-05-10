package com.generation;

// Se importa la clase Scanner para poder leer la entrada del usuario
import java.util.Scanner;

public class Ejercicio4 {

    public static void main(String[] args) {
        // Se crea el objeto Scanner correctamente, pasando System.in como argumento
        Scanner s = new Scanner(System.in);

        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();

        // Se corrige el mensaje impreso para indicar que es el turno del jugador 2
        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        String j2 = s.nextLine();

        // Se utiliza el método .equals() para comparar las cadenas
        if (j1.equals(j2)) {
            System.out.println("Empate");
        } else {
            int g = 2;
            switch(j1) {
                case "piedra":
                    if (j2.equals("tijeras")) {
                        g = 1;
                    }
                    // Se agrega una declaración break al final de cada caso
                    break;

                case "papel":
                    if (j2.equals("piedra")) {
                        g = 1;
                    }
                    break;

                case "tijera":
                    if (j2.equals("papel")) {
                        g = 1;
                    }
                    break;

                default:
            }
            System.out.println("Gana el jugador " + g);
        }
    }
}
