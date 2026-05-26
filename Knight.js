// Klasa reprezentująca skoczka / konika
class Knight {
    constructor() {
        this.type = "KNIGHT";
    }

    
    validateMove(move) {
        const { sourceX, sourceY, destinationX, destinationY } = move;

        // Obliczamy bezwzględną różnicę w osiach X i Y
        const deltaX = Math.abs(destinationX - sourceX);
        const deltaY = Math.abs(destinationY - sourceY);

        // Ruch skoczka to zawsze kombinacja (1, 2) lub (2, 1)
        // Oznacza to, że jedna z różnic musi wynosić 1, a druga 2
        const isCorrectDelta = (deltaX === 1 && deltaY === 2) || (deltaX === 2 && deltaY === 1);

        // Dodatkowo upewniamy się, że figura nie stoi w miejscu (choć warunek powyżej to już wyklucza, 
        // bo 0 nie jest ani 1, ani 2)
        if (!isCorrectDelta) {
            return false;
        }

        return true;
    }
}