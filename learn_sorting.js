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

var columns = [
    {key: 'title', label: 'Title'}, 
    {key: 'stillRunning', label: 'Is it still running?'}, 
    {key: 'airDate', label: 'When the show started airing'}, 
    {key: 'episodeCount', label: 'How many Episodes are released?'}, 
];
var renderTableColumnHead = function(column) {
    return /*html*/`<th>${column.label}</th>`;
};
var renderTableRowCell = function(value, key) {
    return /*html*/`<td class="${key}">${value}</td>`;
};
var renderTable = function(columns, rows) {
    var renderTableRow = function(row) {
        var renderCell = function(column) {
            var value = row[column.key];
            return renderTableRowCell(value, column.key);
        };
        var columnString = columns.map(renderCell).join('');
        return /*html*/`<tr>${columnString}</tr>`;
    };
    
    var columnString = columns.map(renderTableColumnHead).join('\n');
    var rowString = rows.map(renderTableRow).join('\n');
    console.log('what is columnString?', columnString)
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
var renderTVShows = function() {
    showHolder.innerHTML = renderTable(columns, tvShows);
};

renderTVShows();

var sortDateButton = document.getElementById('sort-date');
var sortEpisodeButton = document.getElementById('sort-episodes');

var sortByDate = function(a, b) {
    return a.airDate.localeCompare(b.airDate);
    // reverse order of a.airDate and b.airDate for reverse
};

var sortByEpisodes = function(a, b) {
    return a.episodeCount - b.episodeCount;
    // 
};

sortDateButton.addEventListener('click', function(){
    tvShows.sort(sortByDate);
    renderTVShows();
})
sortEpisodeButton.addEventListener('click', function(){
    tvShows.sort(sortByEpisodes);
    renderTVShows();
})
