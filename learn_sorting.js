var tvShows = [
    {
        title: 'Rick and Morty',
        stillRunning: true,
        airDate: '2013-12-02',
        episodeCount: 71,
    },
    {
        title: 'Deep Space Nine',
        stillRunning: false,
        airDate: '1993-01-03',
        episodeCount: 176,
    },
    {
        title: 'Frieren: Beyond Journey\'s End',
        stillRunning: true,
        airDate: '2023-09-29',
        episodeCount: 28,
    },
    {
        title: 'Romantic Killer',
        stillRunning: true,
        airDate: '2022-10-27',
        episodeCount: 12,
    },
    {
        title: 'Pluto',
        stillRunning: false,
        airDate: '2023-10-26',
        episodeCount: 8,
    },
    {
        title: 'CareBears',
        stillRunning: false,
        airDate: '1985-09-14',
        episodeCount: 41,
    },


];

var tvShowColumns = [
    { key: 'title', label: 'Title' },
    { key: 'stillRunning', label: 'Is it still running?' },
    { key: 'airDate', label: 'When the show started airing' },
    { key: 'episodeCount', label: 'How many Episodes are released?' },
];
var renderTableColumnHead = function (column) {
    return /*html*/`<th>${column.label}</th>`;
};
var renderTableRowCell = function (value, key) {
    return /*html*/`<td class="${key}">${value}</td>`;
};
var renderTable = function (columns, rows) {
    var renderTableRow = function (row) {
        var renderCell = function (column) {
            var value = row[column.key];
            return renderTableRowCell(value, column.key);
        };
        var columnString = columns.map(renderCell).join('');
        return /*html*/`<tr>${columnString}</tr>`;
    };

    var columnString = columns.map(renderTableColumnHead).join('\n');
    var rowString = rows.map(renderTableRow).join('\n');
    // console.log('what is columnString?', columnString)
    return /*html*/`
        <table>
            <thead>
                <tr>${columnString}</tr>
            </thead>
            <tbody>
                ${rowString}
            </tbody>
        </table>
    `;
};
var showHolder = document.getElementById('show-holder');
var renderTVShows = function () {
    showHolder.innerHTML = renderTable(tvShowColumns, tvShows);
};

renderTVShows();

var sortDateAscendButton = document.getElementById('sort-date-ascending');
var sortEpisodeAscendButton = document.getElementById('sort-episodes-ascending');
var sortDateDescendButton = document.getElementById('sort-date-descending');
var sortEpisodeDescendButton = document.getElementById('sort-episodes-descending');

var sortByDateAscend = function (a, b) {
    return a.airDate.localeCompare(b.airDate);
    // reverse order of a.airDate and b.airDate for reverse button
};

var sortByEpisodesAscend = function (a, b) {
    return a.episodeCount - b.episodeCount;
    // swap a.episodeCount and b.episodeCount for other button
};

sortDateAscendButton.addEventListener('click', function () {
    tvShows.sort(sortByDateAscend);
    renderTVShows();
})
sortEpisodeAscendButton.addEventListener('click', function () {
    tvShows.sort(sortByEpisodesAscend);
    renderTVShows();
})
var sortByDateDescend = function (a, b) {
    return b.airDate.localeCompare(a.airDate);
    // reverse order of a.airDate and b.airDate for reverse button
};

var sortByEpisodesDescend = function (a, b) {
    return b.episodeCount - a.episodeCount;
    // swap a.episodeCount and b.episodeCount for other button
};

sortDateDescendButton.addEventListener('click', function () {
    tvShows.sort(sortByDateDescend);
    renderTVShows();
})
sortEpisodeDescendButton.addEventListener('click', function () {
    tvShows.sort(sortByEpisodesDescend);
    renderTVShows();
})

var sortDateToggleButton = document.getElementById('sort-date-toggle');
var sortEpisodeToggleButton = document.getElementById('sort-episodes-toggle');

var dateAscending = true;
var episodeAscending = true;

// create a function that when called changes the state of the button
// update since writing the function. I'm able to get it to log the first state
// it doesnt write the variable in the function to 'b' so it wont go to the else
// apple clicker project may be worth checking to find some answers on how to do this
var dateToggle = function () {
    dateAscending = !dateAscending;
    tvShows.sort(dateAscending ? sortByDateAscend : sortByDateDescend);
    renderTVShows();
};
sortDateToggleButton.addEventListener('click', dateToggle);

var episodeToggle = function () {
    episodeAscending = !episodeAscending;
    tvShows.sort(episodeAscending ? sortByEpisodesAscend : sortByEpisodesDescend);
    renderTVShows();
};
sortEpisodeToggleButton.addEventListener('click', episodeToggle);


var goats = [
    {name: 'Gruff', powerLevel: 9001, isGrumpy: true},
    {name: 'Fawn', powerLevel: 1000000, isGrumpy: false},
    {name: 'Billy', powerLevel: 10, isGrumpy: false},
];
var goatColumns = [
    { key: 'name', label: 'Name' },
    { key: 'powerLevel', label: 'How much Power?' },
    { key: 'isGrumpy', label: 'Are they grumpy?' },
];
var goatHolder = document.getElementById('goat-holder');
var renderGoatTable = function () {
    goatHolder.innerHTML = renderTable(goatColumns, goats);
};
renderGoatTable();
