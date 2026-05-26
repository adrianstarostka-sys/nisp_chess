// Klasa reprezentująca króla
class King {
    constructor() {
        this.type = "KING";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);
        
        // Król może ruszyć się o 1 pole w dowolnym kierunku i musi zmienić pole
        return dx <= 1 && dy <= 1 && (dx > 0 || dy > 0);
    }
}