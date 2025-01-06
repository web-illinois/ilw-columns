import { css } from 'lit';

export default css`
  div.columns {
    display: flex;
    column-gap: var(--ilw-columns-gap, 0);
  }

  div.columns.fixed {
    margin: 0 var(--ilw-margin--side, 0);
  }

  div.columns > div {
    flex: 1 0 0;
  }

  div.columns.first2 > div:first-child, div.columns.last2 > div:last-child {
    flex: 2 0 0;
  }

  div.columns.first3 > div:first-child, div.columns.last3 > div:last-child {
    flex: 3 0 0;
  }

  div.columns.middle2 > div {
    flex: 2 0 0;
  }

  div.columns.middle2 > div:first-child, div.columns.middle2 > div:last-child  {
    flex: 1 0 0;
  }

  div.columns.reverse {
      flex-direction: row-reverse;
  }

  @media (max-width: 700px) {
    div.columns {
      flex-direction: column;
      row-gap: var(--ilw-columns-gap, 0);
    }
  }

  @container (max-width: 700px) {
    div.columns {
      flex-direction: column;
      row-gap: var(--ilw-columns-gap, 0);
    }
  }

  .columns-outer.fixed {
        left:50%;
        margin-left:-50vw;
        margin-right:-50vw;
        padding-left:0;
        padding-right:0;
        position:relative;
        right:50%;
        width:100vw;
        container-type: inline-size;
        contain: layout;
    }

  .columns-outer.blue {
        background-color: var(--il-blue);
    }

  .columns-outer.orange {
      background-color: var(--il-orange);
  }

  .columns-outer.blue-gradient {
      background: var(--il-gradient-blue), var(--il-blue-darker-1);
  }
  .columns-outer.orange-gradient {
      background: var(--il-gradient-orange), var(--il-altgeld);
  }
  
  .columns-outer.gray {
      background-color: var(--il-storm-lighter-4);
  }

  ::slotted(*) {
    height: 100%;
    box-sizing: border-box;
  }
`;