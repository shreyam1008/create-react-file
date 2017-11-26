module.exports = `
@import "~css/func/index";

.components-raven-render {
  top: 0;
  left: 0;
  padding: 10px;

  @extend %position-fixed;
  @extend %color-white;
  @extend %pointer-events-none;

  .raven-eye {
    @extend %row;

    > * {
      @extend %float-left;
    }

    & + .raven-eye {
      margin-top: 5px;
    }

    .title {
      &:after {
        content:  ':';
      }

      & + .desc {
        margin-left: 5px;
      }
    }
  }
}
`;
