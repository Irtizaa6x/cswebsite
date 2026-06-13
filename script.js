function renderCommittee() {
    if (!siteData.committeeGroups) return;

    // 1. Moderator
    const moderatorContainer = document.getElementById('moderatorTree');
    if (moderatorContainer && siteData.committeeGroups.moderator) {
        moderatorContainer.innerHTML = renderMemberCards(siteData.committeeGroups.moderator.members);
    }

    // 2. Deputy Moderators
    const deputyContainer = document.getElementById('deputyModeratorTree');
    if (deputyContainer && siteData.committeeGroups.deputyModerators) {
        deputyContainer.innerHTML = renderMemberCards(siteData.committeeGroups.deputyModerators);
    }

    // 3. Executive Committee (with tree lines)
    const execContainer = document.getElementById('executiveTree');
    if (execContainer && siteData.committeeGroups.executiveCommittee) {
        const execs = siteData.committeeGroups.executiveCommittee;
        execContainer.innerHTML = `
            <div class="exec-tree-container">
                <div class="exec-row top">
                    ${renderMemberCard(execs[0])} <!-- Chair -->
                </div>
                <div class="exec-connector"></div>
                <div class="exec-row middle">
                    ${renderMemberCard(execs[1])} <!-- Vice Chair -->
                    ${renderMemberCard(execs[2])} <!-- General Secretary -->
                </div>
                <div class="exec-connector"></div>
                <div class="exec-row bottom">
                    ${renderMemberCard(execs[3])} <!-- Treasurer -->
                </div>
            </div>
        `;
    }

    // 4. Secretaries (grid)
    const secGrid = document.getElementById('secretariesGrid');
    if (secGrid && siteData.committeeGroups.secretaries) {
        secGrid.innerHTML = renderMemberCards(siteData.committeeGroups.secretaries);
    }

    // 5. Other groups (Multimedia, Executive Members) as normal cards
    const otherContainer = document.getElementById('otherGroupsContainer');
    if (otherContainer) {
        let otherHtml = '';
        if (siteData.committeeGroups.multimedia) {
            otherHtml += `<div class="committee-group"><h3 class="group-title"><i class="fas fa-video"></i> Multimedia Specialists</h3><div class="committee-grid">${renderMemberCards(siteData.committeeGroups.multimedia)}</div></div>`;
        }
        if (siteData.committeeGroups.executiveMembers) {
            otherHtml += `<div class="committee-group"><h3 class="group-title"><i class="fas fa-users"></i> Executive Members</h3><div class="committee-grid">${renderMemberCards(siteData.committeeGroups.executiveMembers)}</div></div>`;
        }
        otherContainer.innerHTML = otherHtml;
    }
}

// Helper to render a single member card (with larger image and contact)
function renderMemberCard(member) {
    const imgHtml = member.image 
        ? `<img src="${member.image}" alt="${member.name}" class="member-img">`
        : `<i class="fas fa-user-circle"></i>`;
    return `
        <div class="member-card-detailed">
            <div class="member-img-wrapper">${imgHtml}</div>
            <h4>${member.name}</h4>
            <p class="member-role">${member.role}</p>
            ${member.email ? `<p class="member-contact"><i class="fas fa-envelope"></i> ${member.email}</p>` : ''}
            ${member.phone ? `<p class="member-contact"><i class="fas fa-phone-alt"></i> ${member.phone}</p>` : ''}
        </div>
    `;
}

// Helper to render an array of members
function renderMemberCards(members) {
    return members.map(m => renderMemberCard(m)).join('');
}
