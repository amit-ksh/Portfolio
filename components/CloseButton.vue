<template>
  <div role="button" class="outer font-mono">
    <div class="inner">
      <label>Close</label>
    </div>
  </div>
</template>

<style scoped>
.outer {
  position: relative;
  width: 36px;
  cursor: pointer;
}

.inner {
  width: inherit;
  text-align: center;
}

label {
  font-size: 0.8em;
  line-height: 2.5em;
  text-transform: uppercase;
  color: #fff;
  transition: all 0.3s ease-in;
  opacity: 0;
  cursor: pointer;
}

.inner:before,
.inner:after {
  position: absolute;
  content: '';
  height: 2px;
  width: inherit;
  background: white;
  left: 0;
  transition: all 0.3s ease-in;
}

.inner:before {
  top: 50%;
  transform: rotate(45deg);
}

.inner:after {
  bottom: 50%;
  transform: rotate(-45deg);
}

.outer:hover label {
  opacity: 1;
}

.outer:hover .inner:before,
.outer:hover .inner:after {
  transform: rotate(0);
}

.outer:hover .inner:before {
  top: 0;
}

.outer:hover .inner:after {
  bottom: 0;
}
</style>
