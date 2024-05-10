package Ejercicio6;

import java.util.Scanner; // Importamos la clase Scanner para leer la entrada del usuario

public class Codigo6 {
    public static void main(String[] args) { // Agregamos el método main para que el programa pueda ejecutarse
        int[] n = new int[20]; // Corregimos la declaración del array

        for (int i = 0; i < 20; i++) { // Corregimos el incremento en el bucle for
            n[i] = (int) (Math.random() * 381) + 20;
            System.out.print(n[i] + " "); // Corregimos el método de impresión
        }

        System.out.println("\n¿Qué números quiere resaltar? "); // Corregimos el método de impresión
        System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");

        Scanner scanner = new Scanner(System.in); // Creamos un objeto Scanner para leer la entrada del usuario
        int opcion = scanner.nextInt(); // Usamos el objeto Scanner para leer la entrada del usuario

        int multiplo = (opcion == 1) ? 5 : 7; // Corregimos la asignación condicional

        for (int e : n) { // Cambiamos foreach a for y corregimos el tipo de variable de char a int
            if (e % multiplo == 0) {
                System.out.print("[" + e + "] ");
            } else {
                System.out.print(e + " "); // Corregimos el método de impresión
            }
        }
        scanner.close();
    }
}
