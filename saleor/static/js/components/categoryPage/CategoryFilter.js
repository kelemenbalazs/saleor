import React, { Component, PropTypes } from 'react';

export default class CategoryFilter extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired
  }

  render() {
    const { category } = this.props;
    const parent = category.ancestors ? category.ancestors[category.ancestors.length - 1] : null;
    return (
      <div className="product-filters__categories">
        <h2><strong>{category.name}</strong></h2>
        {parent && (
          <div className="product-filters__categories__parents">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <a href={parent.url}>{`${gettext('See all')} ${parent.name}`}</a>
          </div>
        )}
        <ul className={category.parent ? ('product-filters__categories__childs') : ('product-filters__categories__childs no-parent')}>
          {category.children && (category.children.map((child) => {
            return (
              <li key={child.pk} className="item">
                <a href={child.url}>{child.name}</a>
              </li>
            );
          }))}
        </ul>
      </div>
    );
  }
}
