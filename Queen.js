// Klasa reprezentująca królową
class Queen {
    constructor() {
        this.type = "QUEEN";
    }

    validateMove(move) {
        // Ponownie, pamiętaj o sprawdzeniu czy nazwy (startX, endX) 
        // pokrywają się z tym, co macie w pliku Pawn.js!
        const startX = move.startX;
        const startY = move.startY;
        const endX = move.endX;
        const endY = move.endY;

        // Sprawdzenie, czy figura w ogóle zmieniła pozycję
        if (startX === endX && startY === endY) {
            return false;
        }

        const deltaX = Math.abs(endX - startX);
        const deltaY = Math.abs(endY - startY);

        // 1. Sprawdzenie ruchu po przekątnej (jak Goniec)
        if (deltaX === deltaY) {
            return true;
        }

        // 2. Sprawdzenie ruchu w pionie lub poziomie (jak Wieża)
        // startX === endX oznacza ruch w pionie (zmienia się tylko Y)
        // startY === endY oznacza ruch w poziomie (zmienia się tylko X)
        if (startX === endX || startY === endY) {
            return true;
        }

        // Jeśli ruch nie był ani po przekątnej, ani w linii prostej - jest niepoprawny
        return false;
    }
}