function renderEvents() {
    const eventsGrid = document.getElementById('eventsGrid');
    if (!eventsGrid || !siteData.events) return;
    
    eventsGrid.innerHTML = siteData.events.map(event => {
        // Build speakers HTML
        const speakersHtml = event.speakers && event.speakers.length > 0
            ? `<div class="event-speakers"><i class="fas fa-users"></i> ${event.speakers.join(', ')}</div>`
            : '';
        
        // Extra info (like "3 Days Intensive")
        const extraHtml = event.extra ? `<div class="event-extra">${event.extra}</div>` : '';
        
        // Location
        const locationHtml = event.location ? `<div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>` : '';
        
        return `
            <div class="event-card-compact">
                <div class="event-header">
                    <span class="event-date-inline">${event.date}</span>
                    <span class="event-badge">${event.badge}</span>
                </div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                ${speakersHtml}
                ${extraHtml}
                ${locationHtml}
            </div>
        `;
    }).join('');
}
