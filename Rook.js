// Klasa reprezentująca wieżę
class Rook {
    constructor() {
        this.type = "ROOK";
    }

    
    validateMove(move) {
        
        const { sourceX, sourceY, destinationX, destinationY } = move;

        // Wieża może się poruszać tylko poziomo lub pionowo
        // Czyli albo X się nie zmienia (ruch pionowy), albo Y się nie zmienia (ruch poziomy)
        const isVerticalMove = sourceX === destinationX;
        const isHorizontalMove = sourceY === destinationY;

        // Ruch musi być albo pionowy, albo poziomy, ale nie oba jednocześnie (chyba że to ten sam punkt, co jest błędem)
        if (!isVerticalMove && !isHorizontalMove) {
            return false;
        }

        // Ruch nie może być na to samo pole
        if (sourceX === destinationX && sourceY === destinationY) {
            return false;
        }

        // Jeśli ruch jest poziomy lub pionowy i nie jest to ten sam punkt, to jest poprawny geometrycznie
        return true;
    }
}