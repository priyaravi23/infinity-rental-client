import _ from 'lodash';
import PropTypes from 'prop-types';

export function paginate(items, currentPage, pageSize) {
    // calculate array start index to begin slicing from
    const startIndex = (currentPage - 1) * pageSize;
    // convert items array to a lodash wrapper
    return (
        _(items)
        // slice items array starting from startIndex number
            .slice(startIndex)
            // grab always 4 items from the array
            .take(pageSize)
            // convert again to regular array
            .value()
    );
}

paginate.propTypes = {
    items: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired
};