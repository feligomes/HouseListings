// Mock data generation functions
const streets = ["Main St", "Park Ave", "Broadway", "Elm St", "Maple Ave", "Oak St", "Cedar Ln", "Pine St", "Washington St", "Lake Ave"];
const zipCodes = ["10001", "10003", "10005", "10006", "10008", "10009", "10010"];

function generateHash(input) {
    const str = input.toString();
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    hash = (hash >>> 0) * 2654435761 % 2**32;
    return (hash >>> 0) / 2**32;
}

function generatePrice(id) {
    const hash = generateHash(id);
    return Math.round((800000 + hash * 700000) / 1000) * 1000;
}

function getRoomsFromPrice(price) {
    if (price < 900000) return { bedrooms: 2, bathrooms: 1 };
    if (price < 1000000) return { bedrooms: 2, bathrooms: 1.5 };
    if (price < 1200000) return { bedrooms: 3, bathrooms: 1.5 };
    if (price < 1400000) return { bedrooms: 4, bathrooms: 2.5 };
    return { bedrooms: 4, bathrooms: 3 };
}

function generateOpenHouses(id) {
    const dates = [];
    const usedDates = new Set();
    const numOpenHouses = 1 + Math.floor(generateHash(id) * 5);
    
    for (let i = 0; i < numOpenHouses; i++) {
        const date = new Date();
        date.setDate(date.getDate() + Math.floor(generateHash(id * 10 + i) * 60)); // Next 60 days
        
        const dateStr = date.toISOString().split('T')[0];
        if (!usedDates.has(dateStr)) {
            usedDates.add(dateStr);
            const timeSlots = ["10AM-12PM", "12PM-2PM", "2PM-4PM", "4PM-6PM"];
            const timeSlot = timeSlots[Math.floor(generateHash(id * 100 + i) * timeSlots.length)];
            dates.push({ date: dateStr, time: timeSlot });
        }
    }
    
    return dates;
}

function generateListing(id) {
    const price = generatePrice(id);
    const { bedrooms, bathrooms } = getRoomsFromPrice(price);
    
    return {
        id: `1000${id}`,
        address: `${id * 100} ${streets[id % streets.length]}`,
        city: "New York City",
        state: "NY",
        zipCode: zipCodes[id % zipCodes.length],
        price,
        bedrooms,
        bathrooms,
        isSaved: true,
        isFavorited: id % 5 === 0 || id % 7 === 0,
        openHouses: generateOpenHouses(id)
    };
}

// Generate all listings once
export const mockListings = new Array(100).fill(0).map((_, index) => generateListing(index)); 