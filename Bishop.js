// Klasa reprezentująca gońca
class Bishop {
    constructor() {
        this.type = "BISHOP";
    }

    
    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);
        
        // Goniec porusza się po przekątnych i musi zmienić pole
        return dx === dy && dx > 0;
    }
}