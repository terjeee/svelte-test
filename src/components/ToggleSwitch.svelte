<label class="switch">
  <input type="checkbox" />
  <span class="slider-green round" />
</label>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    display: none;
  }

  .slider-green {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #65646435;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider-green:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider-green {
    background-color: var(--clr-green);
  }

  input:focus + .slider-green {
    box-shadow: 0 0 1px var(--clr-white);
  }

  input:checked + .slider-green:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider-green.round {
    border-radius: 34px;
  }

  .slider-green.round:before {
    border-radius: 50%;
  }
</style>
