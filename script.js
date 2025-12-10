function cleanEmail() {
    let raw = document.getElementById("emailInput").value;

    // GEN-Z BOOSTED CLEANING ENGINE
    let cleaned = raw
        // remove extra spaces
        .replace(/\s+/g, " ")

        // normalize line breaks
        .replace(/(?:\r\n|\r|\n)/g, "\n")

        // delete signatures
        .replace(/Sent from my .*/gi, "")

        // remove disclaimers / auto footers
        .replace(/This message.*$/gi, "")

        .replace(/unsubscribe.*$/gi, "")

        .trim();

    document.getElementById("output").value = cleaned;
}
