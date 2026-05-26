// Klasa reprezentująca królową
class Queen {
    constructor() {
        this.type = "QUEEN";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);
        
        // Królowa musi zmienić pole
        if (dx === 0 && dy === 0) return false;
        
        // Ruch po linii prostej (wieża) LUB po przekątnej (goniec)
        return dx === 0 || dy === 0 || dx === dy;
    }
}