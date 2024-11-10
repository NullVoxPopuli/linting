# Changelog






## Release (2024-11-01)

@nullvoxpopuli/eslint-configs 4.3.0 (minor)

#### :rocket: Enhancement
* `@nullvoxpopuli/eslint-configs`
  * [#671](https://github.com/NullVoxPopuli/eslint-configs/pull/671) Expose ember's config builder ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 1
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2024-08-02)

@nullvoxpopuli/eslint-configs 4.2.0 (minor)

#### :rocket: Enhancement
* `@nullvoxpopuli/eslint-configs`
  * [#654](https://github.com/NullVoxPopuli/eslint-configs/pull/654) Support mts for node config ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 1
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2024-08-02)

@nullvoxpopuli/eslint-configs 4.1.0 (minor)

#### :rocket: Enhancement
* `@nullvoxpopuli/eslint-configs`
  * [#653](https://github.com/NullVoxPopuli/eslint-configs/pull/653) Use node config builder for node ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 1
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2024-05-14)

@nullvoxpopuli/eslint-configs 4.0.0 (major)

#### :boom: Breaking Change
* `@nullvoxpopuli/eslint-configs`
  * [#627](https://github.com/NullVoxPopuli/eslint-configs/pull/627) Support GJS and GTS ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#634](https://github.com/NullVoxPopuli/eslint-configs/pull/634) Drop support for prettier 2, only support 3 ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#632](https://github.com/NullVoxPopuli/eslint-configs/pull/632) Update import-sort to v12 ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#631](https://github.com/NullVoxPopuli/eslint-configs/pull/631) Bump eslint-plugin-n to v17 ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#628](https://github.com/NullVoxPopuli/eslint-configs/pull/628) Use latest typescript-eslint (v8) ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### :bug: Bug Fix
* `@nullvoxpopuli/eslint-configs`
  * [#581](https://github.com/NullVoxPopuli/eslint-configs/pull/581) fix: add @babel/plugin-proposal-decorators as peerDep ([@betocantu93](https://github.com/betocantu93))

#### :house: Internal
* `@nullvoxpopuli/eslint-configs`
  * [#633](https://github.com/NullVoxPopuli/eslint-configs/pull/633) Update renovate config ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#629](https://github.com/NullVoxPopuli/eslint-configs/pull/629) Release plan ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 2
- Alberto Cantú Gómez ([@betocantu93](https://github.com/betocantu93))
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

# @nullvoxpopuli/eslint-configs

## 3.2.2

### Patch Changes

- [#498](https://github.com/NullVoxPopuli/eslint-configs/pull/498) [`37296f5`](https://github.com/NullVoxPopuli/eslint-configs/commit/37296f5587cd21144179bbdc3cb9db099431d7e7) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - widen peer dep ranges

## 3.2.1

### Patch Changes

- [#496](https://github.com/NullVoxPopuli/eslint-configs/pull/496) [`bca6895`](https://github.com/NullVoxPopuli/eslint-configs/commit/bca6895f5f7a38e21dd2d9e1eb716e93d3ab0bdc) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - ```js
  '@typescript-eslint/prefer-optional-chain': 'off',

  ```

  we typically want this one enabled,
  but in a major release of typescript-eslint,
  it began to require that tsconfig.json be passed
  which, means we need to disable the lint.
  in a future release of `@nullvoxpopuli/eslint-configs`,
  we can conditionally add the tsconfig-needing lints
  if a tsconfig path is passed,
  or a local tsconfig.json is present and detected

  this capability will align with the upcoming eslint 9
  config in the next major of eslint-configs
  ```

## 3.2.0

### Minor Changes

- [#469](https://github.com/NullVoxPopuli/eslint-configs/pull/469) [`51f56a9`](https://github.com/NullVoxPopuli/eslint-configs/commit/51f56a9397c5eb5d35fb1f067fc63b977237fb38) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - Add the 'type-tests' folder to the ember configuration

## 3.1.4

### Patch Changes

- [#458](https://github.com/NullVoxPopuli/eslint-configs/pull/458) [`5ff6154`](https://github.com/NullVoxPopuli/eslint-configs/commit/5ff6154e5d61e531d1092e97f77a2d7d2710cb62) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - Add better support for v1 addons in the ember config

## 3.1.3

### Patch Changes

- [#362](https://github.com/NullVoxPopuli/eslint-configs/pull/362) [`0efe54e`](https://github.com/NullVoxPopuli/eslint-configs/commit/0efe54e6f1ecddd0a2088a28a4adf587c7286c39) Thanks [@simonihmig](https://github.com/simonihmig)! - Fix typo in configs/ember.js where `requireConfigFile` for the `@babel/eslint-parser` was misspelled.

## 3.1.2

### Patch Changes

- [`087ea28`](https://github.com/NullVoxPopuli/eslint-configs/commit/087ea2816950358aa9ff702c16901599f09f61b7) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - import-sorting fix: place node imports separate from package imports

## 3.1.1

### Patch Changes

- [#349](https://github.com/NullVoxPopuli/eslint-configs/pull/349) [`8ab7e17`](https://github.com/NullVoxPopuli/eslint-configs/commit/8ab7e174173d00bd9a77987d2e0011c4de9fb25c) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - Remove eslint-plugin-n from cross-platform configs

## 3.1.0

### Minor Changes

- [#347](https://github.com/NullVoxPopuli/eslint-configs/pull/347) [`c99bdbd`](https://github.com/NullVoxPopuli/eslint-configs/commit/c99bdbd3c7008a209c33e104773604e977877345) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - Add crossPlatform config. This is considered beta for now, and is not explicitly under SemVer at this time

## 3.0.4

### Patch Changes

- [`ed3496e`](https://github.com/NullVoxPopuli/eslint-configs/commit/ed3496ef1b39a567b5f96da56fc3c684020ac644) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - widen range of @typescript-eslint peers

## 3.0.3

### Patch Changes

- [#328](https://github.com/NullVoxPopuli/eslint-configs/pull/328) [`5e62c88`](https://github.com/NullVoxPopuli/eslint-configs/commit/5e62c881a79d3dbadb9bd97e47760f1b694efcb0) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - disable accidentally enabled lint rule, import/exports-last

## 3.0.2

### Patch Changes

- [#323](https://github.com/NullVoxPopuli/eslint-configs/pull/323) [`9ddd667`](https://github.com/NullVoxPopuli/eslint-configs/commit/9ddd667f1bdf7e2afeea31167a7e84000adc2e16) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - Rule fixes which affect typescript and ember projects:

  in Ember projects, node files will be linted assuming at least Node 16.
  (Node 16 is already a requirement to use eslint-configs v3)

  in TypeScript projects, the "ban-types" lint has been turned off.
  In my experience writing libraries, there are many cases where
  "basic type and you just don't care, becausue it doesn't affect intellisense"
  is the right choice -- these types include `object` and `Function`,
  for example, and should be allowed.
  It's true that using different types that are more specific would provide better intellisense,
  if they are user facing -- but for non-user-facing types, these types are perfectly fine.

## 3.0.1

### Patch Changes

- [#319](https://github.com/NullVoxPopuli/eslint-configs/pull/319) [`e29a127`](https://github.com/NullVoxPopuli/eslint-configs/commit/e29a1277b3f4183840eec87ac5d19b67f86d2250) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - in ember's deprecation-worflow.js, allow the "self" global

## 3.0.0

### Major Changes

- [`f1a1f30`](https://github.com/NullVoxPopuli/eslint-configs/commit/f1a1f3091808d48d8fff3d432cb8dd89f20714f1) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - prettier integration with all exported configs is now off by default.

  To get the old behavior back, pass `prettierIntegration: true` in the
  config object to each config helper.

  ```js
  const { configs } = require('@nullvoxpopuli/eslint-configs');

  module.exports = configs.ember({ prettierIntegration: true });
  ```

  or

  ```js
  const { configs } = require('@nullvoxpopuli/eslint-configs');

  module.exports = configs.node({ prettierIntegration: true });
  ```

  By default, either of these will read your local .prettierrc\* config files
  (using the same tool prettier uses, cosmiconfig)

- [`fc3b4e5`](https://github.com/NullVoxPopuli/eslint-configs/commit/fc3b4e5f1f8f1d259d3ada54aad48d8f49738d5b) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - Drop support for Node < 16

### Minor Changes

- [#311](https://github.com/NullVoxPopuli/eslint-configs/pull/311) [`48d0491`](https://github.com/NullVoxPopuli/eslint-configs/commit/48d04911db6f7bda50e93e9c497013eab33ae550) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - Automatically support `@babel/eslint-parser`, when applicable in ember projects.

  Typically, [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser)
  requires that you either have a babel config co-located to your eslint config,
  or disable requiring a config file entirely.

  This change, allowing for linting ember projects with this parser,
  manually configures the known-to-be-used syntax in Ember projects.
  Which, is the old style of decorator (while we wait for the Spec-decorator to ship)

- [#317](https://github.com/NullVoxPopuli/eslint-configs/pull/317) [`f18a9dd`](https://github.com/NullVoxPopuli/eslint-configs/commit/f18a9dddabf61981f31bc59cf041bb0648cff108) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - Formally support the `.*gjs` and `*.gts` file formats in ember projects.

  The same config you've used before, now supports gjs and gts:

  ```js
  const { configs } = require('@nullvoxpopuli/eslint-configs');

  module.exports = configs.ember();
  ```

  Adding support for gjs and gts is what initially prompted the breaking change to
  change the default of having prettierIntegration turned off -- because in order for
  prettier to parse gjs / gts, we use this plugin: https://github.com/gitKrystan/prettier-plugin-ember-template-tag
  But that plugin is incompatible with eslint-plugin-prettier.

  The https://github.com/NullVoxPopuli/eslint-configs/ monorepo serves as an example for how to set up separate
  format and lint commands if that is unfamiliar.

### Patch Changes

- [#293](https://github.com/NullVoxPopuli/eslint-configs/pull/293) [`ae973cd`](https://github.com/NullVoxPopuli/eslint-configs/commit/ae973cd8d6d92858ff426b1b701c349bd19406f0) Thanks [@NullVoxPopuli](https://github.com/NullVoxPopuli)! - Internal: switch to changeset for automated release. This gives more control over the release process, and alleviates contributors from needing to know of any conventions about commits or anything like that.

## [2.3.5](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.3.4...v2.3.5) (2022-11-14)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.43.0 ([88a94ed](https://github.com/NullVoxPopuli/eslint-configs/commit/88a94ed1dc8f18b0e241f0be73977f452f38a697))

## [2.3.4](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.3.3...v2.3.4) (2022-11-06)

### Bug Fixes

- **deps:** update dependency eslint to v8 ([2e973b9](https://github.com/NullVoxPopuli/eslint-configs/commit/2e973b9ff2fa6a8481702281199ce7cc26d9c1f1))
- **deps:** update dependency eslint-plugin-qunit to v7.3.2 ([2acefdb](https://github.com/NullVoxPopuli/eslint-configs/commit/2acefdba36ae98757af0875cdb39deb3c15ec0d9))

## [2.3.3](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.3.2...v2.3.3) (2022-10-31)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.42.0 ([19c3adb](https://github.com/NullVoxPopuli/eslint-configs/commit/19c3adb8d0e3ed33869f2dc22c576032a924c6f9))

## [2.3.2](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.3.1...v2.3.2) (2022-10-27)

### Bug Fixes

- **ember:** set top level ember config so preproccessors are registered ([723a94c](https://github.com/NullVoxPopuli/eslint-configs/commit/723a94c557a8f11396a013cb158ba89842c1fc68))

## [2.3.1](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.3.0...v2.3.1) (2022-10-27)

### Bug Fixes

- **files:** added gjs/gts to ember file extension support ([aac0be4](https://github.com/NullVoxPopuli/eslint-configs/commit/aac0be43983b735bd8696af1d9f254791ffda3f3))

# [2.3.0](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.63...v2.3.0) (2022-10-27)

### Features

- **eslint-plugin-ember:** upgrade to 11.2.0 for gjs/gts support ([b2d5813](https://github.com/NullVoxPopuli/eslint-configs/commit/b2d5813f89fee4ce949df2dc3b09cd556c002bb9))

## [2.2.63](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.62...v2.2.63) (2022-10-24)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.41.0 ([173956b](https://github.com/NullVoxPopuli/eslint-configs/commit/173956b209c3d25daad0dae93b3a07e160a4b89b))

## [2.2.62](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.61...v2.2.62) (2022-10-18)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v11.1.0 ([1a7fb5e](https://github.com/NullVoxPopuli/eslint-configs/commit/1a7fb5e9f5bf854808cae43cf6da12b59f09e49a))

## [2.2.61](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.60...v2.2.61) (2022-10-17)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.40.1 ([abe0ff8](https://github.com/NullVoxPopuli/eslint-configs/commit/abe0ff891bcd0d893d45020e97932fa1820d5f9b))

## [2.2.60](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.59...v2.2.60) (2022-10-10)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.40.0 ([82516a0](https://github.com/NullVoxPopuli/eslint-configs/commit/82516a019ec6ea668bf726872509642cc1852190))

## [2.2.59](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.58...v2.2.59) (2022-10-03)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.39.0 ([9a91843](https://github.com/NullVoxPopuli/eslint-configs/commit/9a918437756f2d135941b53e42e1568a415e405a))

## [2.2.58](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.57...v2.2.58) (2022-09-26)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.38.1 ([bfa48f4](https://github.com/NullVoxPopuli/eslint-configs/commit/bfa48f46492ffa49e889f2d9ecbcd85a57b5adea))

## [2.2.57](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.56...v2.2.57) (2022-09-19)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.38.0 ([fc4b151](https://github.com/NullVoxPopuli/eslint-configs/commit/fc4b15149bb626c1c1ef0f802bf93b3d438e70d8))

## [2.2.56](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.55...v2.2.56) (2022-09-12)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.37.0 ([035562f](https://github.com/NullVoxPopuli/eslint-configs/commit/035562f4516cc64ebd06ca689a248032ab37e2a4))

## [2.2.55](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.54...v2.2.55) (2022-09-06)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.36.2 ([fe9ed5d](https://github.com/NullVoxPopuli/eslint-configs/commit/fe9ed5d830d309d67f84dd7b3e63821ed20ef8e6))

## [2.2.54](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.53...v2.2.54) (2022-09-03)

### Bug Fixes

- **deps:** update dependency eslint-plugin-simple-import-sort to v8 ([008e91b](https://github.com/NullVoxPopuli/eslint-configs/commit/008e91bbde9fd0d850a65bf1206ffb98dd683c9d))

## [2.2.53](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.52...v2.2.53) (2022-08-30)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.36.1 ([4487200](https://github.com/NullVoxPopuli/eslint-configs/commit/44872003e91e4e512a27a490930f9a662cb05c41))

## [2.2.52](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.51...v2.2.52) (2022-08-30)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.36.0 ([52bcaf8](https://github.com/NullVoxPopuli/eslint-configs/commit/52bcaf8e9df11a6a63ede045d9646836647c1842))

## [2.2.51](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.50...v2.2.51) (2022-08-25)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.35.1 ([7f903e1](https://github.com/NullVoxPopuli/eslint-configs/commit/7f903e110627ff24915cb6588ee5c508ba3f14fe))

## [2.2.50](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.49...v2.2.50) (2022-08-23)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.34.0 ([4a53598](https://github.com/NullVoxPopuli/eslint-configs/commit/4a535986d94f17ae1850ed7901d612de31cab62a))

## [2.2.49](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.48...v2.2.49) (2022-08-18)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v11.0.6 ([974d6a9](https://github.com/NullVoxPopuli/eslint-configs/commit/974d6a9ce12f2a7a8279dec79cfea200010b9897))

## [2.2.48](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.47...v2.2.48) (2022-08-15)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.33.1 ([d4e85a0](https://github.com/NullVoxPopuli/eslint-configs/commit/d4e85a043090d062e119f05f69186f15bffeaac9))

## [2.2.47](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.46...v2.2.47) (2022-08-08)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.33.0 ([4d518fb](https://github.com/NullVoxPopuli/eslint-configs/commit/4d518fbdc666993ea332ad5119820a8575278721))

## [2.2.46](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.45...v2.2.46) (2022-08-03)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v11.0.5 ([734e733](https://github.com/NullVoxPopuli/eslint-configs/commit/734e733e1ab7d8fadd67115ac4ebc4aefa331854))

## [2.2.45](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.44...v2.2.45) (2022-08-02)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.32.0 ([7e2537f](https://github.com/NullVoxPopuli/eslint-configs/commit/7e2537f8a26325f38ce94f4e1e7e7c8861196208))

## [2.2.44](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.43...v2.2.44) (2022-07-29)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v11.0.4 ([8182d37](https://github.com/NullVoxPopuli/eslint-configs/commit/8182d373306b04325e70599c7dbe4b367aa52c4b))

## [2.2.43](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.42...v2.2.43) (2022-07-26)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v11.0.3 ([603cd34](https://github.com/NullVoxPopuli/eslint-configs/commit/603cd34e0de1310343d9be91a088c8a2386f6f46))

## [2.2.42](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.41...v2.2.42) (2022-07-25)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.31.0 ([819288b](https://github.com/NullVoxPopuli/eslint-configs/commit/819288bd376971d4289a061735698a5d8cfc0987))

## [2.2.41](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.40...v2.2.41) (2022-07-24)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v11.0.2 ([3fea382](https://github.com/NullVoxPopuli/eslint-configs/commit/3fea38296669be1614c7d3eaf29579cf09ed8eb1))

## [2.2.40](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.39...v2.2.40) (2022-07-22)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v11.0.1 ([12bbc7d](https://github.com/NullVoxPopuli/eslint-configs/commit/12bbc7d503b20751471de6c5f0e7b1f6c8d26450))

## [2.2.39](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.38...v2.2.39) (2022-07-21)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v11 ([85943e3](https://github.com/NullVoxPopuli/eslint-configs/commit/85943e3de84190c70295aaece812e46435d44a47))

## [2.2.38](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.37...v2.2.38) (2022-07-19)

### Bug Fixes

- **deps:** update dependency eslint-plugin-decorator-position to v5.0.1 ([c498452](https://github.com/NullVoxPopuli/eslint-configs/commit/c4984527711827a4ff67e5735d0a8ea698e0c658))

## [2.2.37](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.36...v2.2.37) (2022-07-18)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.30.7 ([acaa2cb](https://github.com/NullVoxPopuli/eslint-configs/commit/acaa2cbe168758350c4462460377074d76c6db81))

## [2.2.36](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.35...v2.2.36) (2022-07-15)

### Bug Fixes

- **deps:** update dependency eslint-plugin-decorator-position to v5 ([c091195](https://github.com/NullVoxPopuli/eslint-configs/commit/c0911958d704e52ca295f03a54638beff029164c))

## [2.2.35](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.34...v2.2.35) (2022-07-11)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.30.6 ([8c8ba79](https://github.com/NullVoxPopuli/eslint-configs/commit/8c8ba793da4a787677a6172e4e193581cfd18f64))

## [2.2.34](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.33...v2.2.34) (2022-07-09)

### Bug Fixes

- **deps:** update dependency eslint-plugin-qunit to v7.3.1 ([26ae9ce](https://github.com/NullVoxPopuli/eslint-configs/commit/26ae9ce89e03339fe391658fba3a8e7d9eb9b44f))

## [2.2.33](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.32...v2.2.33) (2022-07-04)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.30.5 ([097452f](https://github.com/NullVoxPopuli/eslint-configs/commit/097452f6481afee93326f5ad090b5991789e3c66))

## [2.2.32](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.31...v2.2.32) (2022-07-03)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.30.4 ([f119638](https://github.com/NullVoxPopuli/eslint-configs/commit/f119638bfd9af8e6c0801bd11989f5c1e68c846d))

## [2.2.31](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.30...v2.2.31) (2022-07-01)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.30.3 ([f243b4f](https://github.com/NullVoxPopuli/eslint-configs/commit/f243b4f3a32af2d5350312e16fefca1519bb8e7e))

## [2.2.30](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.29...v2.2.30) (2022-06-30)

### Bug Fixes

- **deps:** update dependency eslint-plugin-prettier to v4.2.1 ([d994d9a](https://github.com/NullVoxPopuli/eslint-configs/commit/d994d9a6592de79a5900c49d45a93ce4f9e5bdb8))

## [2.2.29](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.28...v2.2.29) (2022-06-27)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.30.0 ([9e81af0](https://github.com/NullVoxPopuli/eslint-configs/commit/9e81af0957ffa5f33473d73feaaa01627223cd43))

## [2.2.28](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.27...v2.2.28) (2022-06-27)

### Bug Fixes

- **deps:** update dependency eslint-plugin-prettier to v4.1.0 ([e92904f](https://github.com/NullVoxPopuli/eslint-configs/commit/e92904ff6a143fe3df85742d3cd88193b2f7f24e))

## [2.2.27](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.26...v2.2.27) (2022-06-20)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.29.0 ([f924559](https://github.com/NullVoxPopuli/eslint-configs/commit/f9245599ab263f3526b21193c780c98fa9a8c9f6))

## [2.2.26](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.25...v2.2.26) (2022-06-16)

### Bug Fixes

- **deps:** update dependency prettier to v2.7.1 ([b25271e](https://github.com/NullVoxPopuli/eslint-configs/commit/b25271e00608c7952371be19e88d525ddb3b2cb5))

## [2.2.25](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.24...v2.2.25) (2022-06-14)

### Bug Fixes

- **deps:** update dependency prettier to v2.7.0 ([fa6a0eb](https://github.com/NullVoxPopuli/eslint-configs/commit/fa6a0eb2581cadb13831516ddee98009f55ea1df))

## [2.2.24](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.23...v2.2.24) (2022-06-14)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.28.0 ([cd2701b](https://github.com/NullVoxPopuli/eslint-configs/commit/cd2701b4787cb7d6013945661e4f5246a1d3fcba))

## [2.2.23](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.22...v2.2.23) (2022-06-12)

### Bug Fixes

- **deps:** update dependency eslint-plugin-qunit to v7.3.0 ([72f4470](https://github.com/NullVoxPopuli/eslint-configs/commit/72f44707d7aa2167d7acbf09d9f046a965d5d1b9))

## [2.2.22](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.21...v2.2.22) (2022-06-06)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.27.1 ([3144543](https://github.com/NullVoxPopuli/eslint-configs/commit/31445438fcdfff9e1af06f1ecbe2bc9cd6853fed))

## [2.2.21](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.20...v2.2.21) (2022-05-30)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.27.0 ([6cee906](https://github.com/NullVoxPopuli/eslint-configs/commit/6cee9060daa461baeb27f3113af1cc86ab178de8))

## [2.2.20](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.19...v2.2.20) (2022-05-23)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.26.0 ([b29cbca](https://github.com/NullVoxPopuli/eslint-configs/commit/b29cbca5a390ded2c02cab889b5af1a249a29ae8))

## [2.2.19](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.18...v2.2.19) (2022-05-17)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.25.0 ([bcc8c49](https://github.com/NullVoxPopuli/eslint-configs/commit/bcc8c4938d49485535766b4de3e3486ae7e68d75))

## [2.2.18](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.17...v2.2.18) (2022-05-16)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.24.0 ([a771ab4](https://github.com/NullVoxPopuli/eslint-configs/commit/a771ab4526e546ddff701e0d07c378fdec51c5a2))

## [2.2.17](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.16...v2.2.17) (2022-05-09)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.23.0 ([2830493](https://github.com/NullVoxPopuli/eslint-configs/commit/2830493b6a4105765b6077e06e8405f21dd0e4b4))

## [2.2.16](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.15...v2.2.16) (2022-05-05)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.22.0 ([0539441](https://github.com/NullVoxPopuli/eslint-configs/commit/0539441b3579b4eac15cd9af7e9fb78bf210d0b1))

## [2.2.15](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.14...v2.2.15) (2022-05-04)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.6.1 ([82a3830](https://github.com/NullVoxPopuli/eslint-configs/commit/82a3830d1453ab5ecde97acb3f657db1d1aefde2))

## [2.2.14](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.13...v2.2.14) (2022-04-25)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.21.0 ([713e2f0](https://github.com/NullVoxPopuli/eslint-configs/commit/713e2f00739eb9e33e7443e82503bc868a521aea))

## [2.2.13](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.12...v2.2.13) (2022-04-18)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.20.0 ([69a9018](https://github.com/NullVoxPopuli/eslint-configs/commit/69a9018a7acb6792a27db72d1b56238bdfce3dcf))

## [2.2.12](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.11...v2.2.12) (2022-04-08)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.6.0 ([407d972](https://github.com/NullVoxPopuli/eslint-configs/commit/407d97265a0ff7e222a8bf8c281fc878cdde3991))

## [2.2.11](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.10...v2.2.11) (2022-04-06)

### Bug Fixes

- **deps:** update dependency eslint-plugin-import to ^2.26.0 ([2594e1c](https://github.com/NullVoxPopuli/eslint-configs/commit/2594e1cba1aec78a4789e7b1f0150570c0e6caf5))

## [2.2.10](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.9...v2.2.10) (2022-04-04)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.18.0 ([8080a07](https://github.com/NullVoxPopuli/eslint-configs/commit/8080a0787e7d6f110834df859d90d6f6c24ff3a2))

## [2.2.9](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.8...v2.2.9) (2022-04-02)

### Bug Fixes

- **deps:** update dependency prettier to v2.6.2 ([5a2372e](https://github.com/NullVoxPopuli/eslint-configs/commit/5a2372ebb1fc90e17e30b0df9e02c65ffc70ec3f))

## [2.2.8](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.7...v2.2.8) (2022-03-28)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.17.0 ([8c67dc2](https://github.com/NullVoxPopuli/eslint-configs/commit/8c67dc2200695b68b57b452665e839e35731bc25))

## [2.2.7](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.6...v2.2.7) (2022-03-25)

### Bug Fixes

- **deps:** update dependency prettier to v2.6.1 ([7470a3b](https://github.com/NullVoxPopuli/eslint-configs/commit/7470a3b20c3c47a576734f561955fbfec806b043))

## [2.2.6](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.5...v2.2.6) (2022-03-21)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.16.0 ([a16d9fd](https://github.com/NullVoxPopuli/eslint-configs/commit/a16d9fd37e3ff3ee440213ec3f7b4dc051cfd632))

## [2.2.5](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.4...v2.2.5) (2022-03-16)

### Bug Fixes

- **deps:** update dependency prettier to v2.6.0 ([646d9db](https://github.com/NullVoxPopuli/eslint-configs/commit/646d9dbefcadceca2658b71eee34ae0be3c7e7bd))

## [2.2.4](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.3...v2.2.4) (2022-03-14)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.15.0 ([aa7ea0f](https://github.com/NullVoxPopuli/eslint-configs/commit/aa7ea0f555e7b2f6ce3762f6eb3cdf6eaa6c8854))

## [2.2.3](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.2...v2.2.3) (2022-03-07)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.14.0 ([45e6bb5](https://github.com/NullVoxPopuli/eslint-configs/commit/45e6bb5dd626a64d4f8132d3e25b4928149aba13))

## [2.2.2](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.1...v2.2.2) (2022-03-03)

### Bug Fixes

- **deps:** update dependency eslint-config-prettier to v8.5.0 ([a3bed8b](https://github.com/NullVoxPopuli/eslint-configs/commit/a3bed8bf19c739d565fa037e62d448398229cf84))

## [2.2.1](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.2.0...v2.2.1) (2022-03-01)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.13.0 ([f73edad](https://github.com/NullVoxPopuli/eslint-configs/commit/f73edadc1c53b12957df9704fa421202e38e9805))

# [2.2.0](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.25...v2.2.0) (2022-02-22)

### Features

- be lazier and don't require unless we need to ([5f92b4b](https://github.com/NullVoxPopuli/eslint-configs/commit/5f92b4b1222ceb39265e5236e335c502b7f1fa01))

## [2.1.25](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.24...v2.1.25) (2022-02-21)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.12.1 ([96af3e2](https://github.com/NullVoxPopuli/eslint-configs/commit/96af3e2e3c227bb1f3fccff2c99c86f449a96562))

## [2.1.24](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.23...v2.1.24) (2022-02-19)

### Bug Fixes

- **deps:** update dependency eslint-config-prettier to v8.4.0 ([d443420](https://github.com/NullVoxPopuli/eslint-configs/commit/d443420963fcc8613ae04d77d16b2bedebbeb7ba))

## [2.1.23](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.22...v2.1.23) (2022-02-15)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.5.9 ([0902e4e](https://github.com/NullVoxPopuli/eslint-configs/commit/0902e4e39e0ef7e7ebf703347a641c59264de79d))

## [2.1.22](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.21...v2.1.22) (2022-02-14)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.12.0 ([850cdee](https://github.com/NullVoxPopuli/eslint-configs/commit/850cdeec80944d3a1e83f58b089d9e7f45e38909))

## [2.1.21](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.20...v2.1.21) (2022-02-07)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.11.0 ([fe2354e](https://github.com/NullVoxPopuli/eslint-configs/commit/fe2354efbb15ac0138085efcc39a3cc92d854b6b))

## [2.1.20](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.19...v2.1.20) (2022-02-05)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.10.2 ([7b37345](https://github.com/NullVoxPopuli/eslint-configs/commit/7b3734580cc76bec48740138f9267e4e0e5a9645))

## [2.1.19](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.18...v2.1.19) (2022-02-05)

### Bug Fixes

- **ember:** v2 addons may _not_ be type=modules, but still ESM ([ae2c319](https://github.com/NullVoxPopuli/eslint-configs/commit/ae2c319e1c3577dec25addc7f05c29117eab115b))

## [2.1.18](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.17...v2.1.18) (2022-01-17)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.10.0 ([3b2822b](https://github.com/NullVoxPopuli/eslint-configs/commit/3b2822b2229cbef5a78ce005af1c96afb6835f55))

## [2.1.17](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.16...v2.1.17) (2022-01-10)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.9.1 ([54326c4](https://github.com/NullVoxPopuli/eslint-configs/commit/54326c44e9ba676445792e9169a8bb10fdc331f4))

## [2.1.16](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.15...v2.1.16) (2022-01-03)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.9.0 ([9e3c833](https://github.com/NullVoxPopuli/eslint-configs/commit/9e3c833964c421c2d77aac5c047dc306df22cc35))

## [2.1.15](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.14...v2.1.15) (2022-01-03)

### Bug Fixes

- **deps:** update dependency eslint-plugin-import to ^2.25.4 ([e907d57](https://github.com/NullVoxPopuli/eslint-configs/commit/e907d578fed3a8525aba684fef6f809e3cbcaff4))

## [2.1.14](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.13...v2.1.14) (2021-12-27)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.8.1 ([3204a3c](https://github.com/NullVoxPopuli/eslint-configs/commit/3204a3cdd79e555d9e6cc6e4fcb31502c6e8e432))

## [2.1.13](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.12...v2.1.13) (2021-12-26)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.8.0 ([1f8e8cd](https://github.com/NullVoxPopuli/eslint-configs/commit/1f8e8cd3c17c33e90e15a4638506c4d307c1ac09))

## [2.1.12](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.11...v2.1.12) (2021-12-16)

### Bug Fixes

- **deps:** update dependency eslint-plugin-qunit to v7.2.0 ([8807a1b](https://github.com/NullVoxPopuli/eslint-configs/commit/8807a1ba2dda16e0bd27f4072310e9605256a593))

## [2.1.11](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.10...v2.1.11) (2021-12-13)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.7.0 ([ef9be4f](https://github.com/NullVoxPopuli/eslint-configs/commit/ef9be4f411c6af3bc421087f357bfd19df8c53c9))

## [2.1.10](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.9...v2.1.10) (2021-12-06)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.6.0 ([40411bf](https://github.com/NullVoxPopuli/eslint-configs/commit/40411bf51a413a495a6a0b5a30b196d64d40f5f4))

## [2.1.9](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.8...v2.1.9) (2021-12-04)

### Bug Fixes

- **deps:** update dependency prettier to v2.5.1 ([356879e](https://github.com/NullVoxPopuli/eslint-configs/commit/356879ecd9577e83cb281dd0f14eb0d34f47bf69))

## [2.1.8](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.7...v2.1.8) (2021-11-29)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.5.0 ([77ddcdb](https://github.com/NullVoxPopuli/eslint-configs/commit/77ddcdb5548733909d912246d70cf095e269b221))

## [2.1.7](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.6...v2.1.7) (2021-11-25)

### Bug Fixes

- **deps:** update dependency prettier to v2.5.0 ([0f430bd](https://github.com/NullVoxPopuli/eslint-configs/commit/0f430bd8839111fdf687a5ad7316de2a82b77f31))

## [2.1.6](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.5...v2.1.6) (2021-11-23)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.5.8 ([269d712](https://github.com/NullVoxPopuli/eslint-configs/commit/269d71204ce5f560218114c1b07a89c503e57783))

## [2.1.5](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.4...v2.1.5) (2021-11-16)

### Bug Fixes

- **deps:** update dependency eslint-plugin-qunit to v7.1.0 ([702df1a](https://github.com/NullVoxPopuli/eslint-configs/commit/702df1aa95b9c9edec43fe4da0bae2d56e62ebfa))

## [2.1.4](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.3...v2.1.4) (2021-11-15)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.4.0 ([92a0a71](https://github.com/NullVoxPopuli/eslint-configs/commit/92a0a71ce8cc9276b12d614c98b50ea66a90e126))

## [2.1.3](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.2...v2.1.3) (2021-11-10)

### Bug Fixes

- **deps:** update dependency eslint-plugin-import to ^2.25.3 ([9edd303](https://github.com/NullVoxPopuli/eslint-configs/commit/9edd303ab056fd706b7f9f3bead922363fed6abc))

## [2.1.2](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.1...v2.1.2) (2021-11-08)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.3.1 ([1764028](https://github.com/NullVoxPopuli/eslint-configs/commit/17640287584e49c3601921370f1143dc2af24851))

## [2.1.1](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.1.0...v2.1.1) (2021-10-31)

### Bug Fixes

- **node, ESM:** disable invalid rules ([7d1eb4f](https://github.com/NullVoxPopuli/eslint-configs/commit/7d1eb4f5b2dd321bb4dcb3d85136ce6429311665))

# [2.1.0](https://github.com/NullVoxPopuli/eslint-configs/compare/v2.0.0...v2.1.0) (2021-10-31)

### Features

- **ember:** allow ember's node files to be CJS or ESM ([24c7f3e](https://github.com/NullVoxPopuli/eslint-configs/commit/24c7f3ec99db27e5c49e9d671741f0279da1c28c))

# [2.0.0](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.5.8...v2.0.0) (2021-10-30)

### Features

- **ember:** add the addonV2 format to the ember config ([c5af74f](https://github.com/NullVoxPopuli/eslint-configs/commit/c5af74fff635e9758d993d401544abc4497c80f1))
- switch configs to be getters for lazy evaluation ([e774bb2](https://github.com/NullVoxPopuli/eslint-configs/commit/e774bb263a068c843225b620d6daa8bb37379db5))

### BREAKING CHANGES

- additionally, the node configs have been renamed:
  - node -> nodeCJS
  - nodeES -> node
  - nodeESTS -> nodeTS

## [1.5.8](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.5.7...v1.5.8) (2021-10-25)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.2.0 ([cc29a4c](https://github.com/NullVoxPopuli/eslint-configs/commit/cc29a4c3ac54772eb27fd0d44915c505349f963a))

## [1.5.7](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.5.6...v1.5.7) (2021-10-19)

### Bug Fixes

- **deps:** update dependency eslint-plugin-qunit to v7 ([c3fda85](https://github.com/NullVoxPopuli/eslint-configs/commit/c3fda850b425268aa659b06ed3bd00b0b27841cc))

## [1.5.6](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.5.5...v1.5.6) (2021-10-19)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5.1.0 ([3fb57c1](https://github.com/NullVoxPopuli/eslint-configs/commit/3fb57c18ac3485769dcf5ee93ac8e311a959e3a5))

## [1.5.5](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.5.4...v1.5.5) (2021-10-13)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.5.7 ([de33e4d](https://github.com/NullVoxPopuli/eslint-configs/commit/de33e4d20c54f16273ea08f98309f2cc5606c885))

## [1.5.4](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.5.3...v1.5.4) (2021-10-13)

### Bug Fixes

- **deps:** update dependency eslint-plugin-import to ^2.25.2 ([2634e0a](https://github.com/NullVoxPopuli/eslint-configs/commit/2634e0ab289546afa8b02a2ce5c50b98b75fd6ca))

## [1.5.3](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.5.2...v1.5.3) (2021-10-12)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.5.6 ([269a49e](https://github.com/NullVoxPopuli/eslint-configs/commit/269a49ec91c03d4cdfc52b611f9ac39fcf0ad76c))

## [1.5.2](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.5.1...v1.5.2) (2021-10-11)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v5 ([e1e6918](https://github.com/NullVoxPopuli/eslint-configs/commit/e1e69189f0849aebca744944bf164b2d6b975a66))

## [1.5.1](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.5.0...v1.5.1) (2021-10-04)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.33.0 ([16a45db](https://github.com/NullVoxPopuli/eslint-configs/commit/16a45dbc5dacd7760e8862b261e9845c58cb2cf7))

# [1.5.0](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.12...v1.5.0) (2021-10-01)

### Features

- **ember:** support deprecation-workflow.js files ([a272077](https://github.com/NullVoxPopuli/eslint-configs/commit/a2720775e849fe7645cb0b37fd0e894e7c4530f0))

## [1.4.12](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.11...v1.4.12) (2021-09-30)

### Bug Fixes

- **ember:** apply baseConfig to './\*.js' files ([7df7bca](https://github.com/NullVoxPopuli/eslint-configs/commit/7df7bca26decb08a853c31e70535631f9cb94d06))

## [1.4.11](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.10...v1.4.11) (2021-09-29)

### Bug Fixes

- **deps:** update dependency eslint-plugin-decorator-position to v4.0.1 ([5ae0e79](https://github.com/NullVoxPopuli/eslint-configs/commit/5ae0e793306d508d7a1e3d2ba42dc1623fd74d20))

## [1.4.10](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.9...v1.4.10) (2021-09-28)

### Bug Fixes

- **deps:** update dependency eslint-plugin-decorator-position to v4 ([8f906d6](https://github.com/NullVoxPopuli/eslint-configs/commit/8f906d6da84c34c9a6d9bce12b56afcf38968a6b))

## [1.4.9](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.8...v1.4.9) (2021-09-27)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.32.0 ([1fa99b5](https://github.com/NullVoxPopuli/eslint-configs/commit/1fa99b5971860193f597bbdfb3a719ef193f4e2f))

## [1.4.8](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.7...v1.4.8) (2021-09-21)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.5.5 ([f29ada1](https://github.com/NullVoxPopuli/eslint-configs/commit/f29ada1904e3cb669077166f5e10bca4f913bfb4))

## [1.4.7](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.6...v1.4.7) (2021-09-20)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.31.2 ([a2b027c](https://github.com/NullVoxPopuli/eslint-configs/commit/a2b027ccc65a0f24b7760767f4c3c6730766c28e))

## [1.4.6](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.5...v1.4.6) (2021-09-16)

### Bug Fixes

- **deps:** update dependency prettier to v2.4.1 ([e82c0e9](https://github.com/NullVoxPopuli/eslint-configs/commit/e82c0e903b001d34b72936fd917701a98b8e4279))

## [1.4.5](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.4...v1.4.5) (2021-09-13)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.31.1 ([b8a70ab](https://github.com/NullVoxPopuli/eslint-configs/commit/b8a70ab4f408c302de38b45c397c778dd250f22b))

## [1.4.4](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.3...v1.4.4) (2021-09-09)

### Bug Fixes

- **deps:** update dependency prettier to v2.4.0 ([629a4dc](https://github.com/NullVoxPopuli/eslint-configs/commit/629a4dc33ec5624af4e52e130a4be6a89f66c349))

## [1.4.3](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.2...v1.4.3) (2021-09-06)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.31.0 ([3d7677e](https://github.com/NullVoxPopuli/eslint-configs/commit/3d7677ed37cd6ee0161e59636dd9d5f81ff3d945))

## [1.4.2](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.1...v1.4.2) (2021-08-30)

### Bug Fixes

- **deps:** update dependency eslint-plugin-prettier to v4 ([66bc6ae](https://github.com/NullVoxPopuli/eslint-configs/commit/66bc6aecca4c2b27293e7021a9823046398910e6))

## [1.4.1](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.4.0...v1.4.1) (2021-08-30)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.30.0 ([6152f82](https://github.com/NullVoxPopuli/eslint-configs/commit/6152f825a9ded0fc490d6ba773f7d152f578cd49))

# [1.4.0](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.30...v1.4.0) (2021-08-29)

### Features

- **ember, json:** use relative paths, where applicable ([7dc5146](https://github.com/NullVoxPopuli/eslint-configs/commit/7dc514683a9317363644db2b2e420cb67b781b63))

## [1.3.30](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.29...v1.3.30) (2021-08-25)

### Bug Fixes

- **deps:** update dependency eslint-plugin-import to ^2.24.2 ([79f63b2](https://github.com/NullVoxPopuli/eslint-configs/commit/79f63b2cf5a97d476379bac5cbb8f34799a354dd))

## [1.3.29](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.28...v1.3.29) (2021-08-24)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.5.4 ([f80158a](https://github.com/NullVoxPopuli/eslint-configs/commit/f80158a80d269edbb6dc0bf7a85f5374851b802a))

## [1.3.28](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.27...v1.3.28) (2021-08-23)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.29.3 ([1e9d016](https://github.com/NullVoxPopuli/eslint-configs/commit/1e9d0167b1f8db258b0c338324b70190e2d29dba))

## [1.3.27](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.26...v1.3.27) (2021-08-21)

### Bug Fixes

- **deps:** update dependency eslint-plugin-prettier to v3.4.1 ([e313c46](https://github.com/NullVoxPopuli/eslint-configs/commit/e313c4622d27a4d8cbcdabaa303c2ac3bdff5c8a))

## [1.3.26](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.25...v1.3.26) (2021-08-20)

### Bug Fixes

- **deps:** update dependency eslint-plugin-import to ^2.24.1 ([57576f4](https://github.com/NullVoxPopuli/eslint-configs/commit/57576f4c66dde404c9a9258482d54329d1d3c9e1))

## [1.3.25](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.24...v1.3.25) (2021-08-17)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.5.3 ([dd22daa](https://github.com/NullVoxPopuli/eslint-configs/commit/dd22daab968c24eaf3059d3f129e05a9767a70c1))

## [1.3.24](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.23...v1.3.24) (2021-08-17)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.5.2 ([0146dfc](https://github.com/NullVoxPopuli/eslint-configs/commit/0146dfcbb6ac766ecca51f62a2b1ef57b37fefaf))

## [1.3.23](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.22...v1.3.23) (2021-08-16)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.29.2 ([c8680d7](https://github.com/NullVoxPopuli/eslint-configs/commit/c8680d7c6e5a6225580b6d1e0811d1d1595b8a74))

## [1.3.22](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.21...v1.3.22) (2021-08-09)

### Bug Fixes

- **deps:** update dependency eslint-plugin-import to ^2.24.0 ([64fdd93](https://github.com/NullVoxPopuli/eslint-configs/commit/64fdd9346c1cec6c4e10765ed7e3140caab3b3ac))

## [1.3.21](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.20...v1.3.21) (2021-08-09)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.29.1 ([59d3644](https://github.com/NullVoxPopuli/eslint-configs/commit/59d3644b17668a079123ef6e8af0b9ccb5966d38))

## [1.3.20](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.19...v1.3.20) (2021-08-06)

### Bug Fixes

- **deps:** update dependency eslint-plugin-json to ^3.1.0 ([399584a](https://github.com/NullVoxPopuli/eslint-configs/commit/399584a05058f924838e25fdfff90a07f1ca8fba))

## [1.3.19](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.18...v1.3.19) (2021-08-02)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.29.0 ([aef6764](https://github.com/NullVoxPopuli/eslint-configs/commit/aef6764e2bb2b0cb2c9514a5bd9cc9f7cfa39f72))

## [1.3.18](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.17...v1.3.18) (2021-07-31)

### Bug Fixes

- **deps:** update dependency eslint to v7.32.0 ([cdfb3e3](https://github.com/NullVoxPopuli/eslint-configs/commit/cdfb3e35388f8d39713b4b0502ba2623eb29f6db))

## [1.3.17](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.16...v1.3.17) (2021-07-26)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.28.5 ([2bcc4a0](https://github.com/NullVoxPopuli/eslint-configs/commit/2bcc4a0ba4b59f2411d5387066b52b6b3c66d4eb))

## [1.3.16](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.15...v1.3.16) (2021-07-20)

### Bug Fixes

- **deps:** update dependency eslint-plugin-decorator-position to v2.2.29 ([4f74b32](https://github.com/NullVoxPopuli/eslint-configs/commit/4f74b32f38d39cc8925edd974e1c6c06831721bd))

## [1.3.15](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.14...v1.3.15) (2021-07-19)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.28.4 ([0e2d4ee](https://github.com/NullVoxPopuli/eslint-configs/commit/0e2d4ee2ec51c51df1217e3d765e9cad4e5711a6))

## [1.3.14](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.13...v1.3.14) (2021-07-19)

### Bug Fixes

- **engines:** revert node change ([ef1bbc0](https://github.com/NullVoxPopuli/eslint-configs/commit/ef1bbc02d82e64ff84b7d647bf3642904904c071))

## [1.3.13](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.12...v1.3.13) (2021-07-17)

### Bug Fixes

- **deps:** update dependency eslint to v7.31.0 ([c5ef8a2](https://github.com/NullVoxPopuli/eslint-configs/commit/c5ef8a273508d6109580dfc8d49b3af462a468e4))

## [1.3.12](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.11...v1.3.12) (2021-07-12)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.28.3 ([877e38d](https://github.com/NullVoxPopuli/eslint-configs/commit/877e38df1c314c705de595996842d63ea02d8194))

## [1.3.11](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.10...v1.3.11) (2021-07-05)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.28.2 ([15139a9](https://github.com/NullVoxPopuli/eslint-configs/commit/15139a9cad46ffdb14e8e2f437d3d0ee7d7f2291))

## [1.3.10](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.9...v1.3.10) (2021-07-05)

### Bug Fixes

- **deps:** update dependency eslint-plugin-json to v3 ([964176d](https://github.com/NullVoxPopuli/eslint-configs/commit/964176d6662805cd5c4ff598c9f1debe13e0c092))
- **deps:** update typescript-eslint monorepo to v4.28.1 ([ee2118e](https://github.com/NullVoxPopuli/eslint-configs/commit/ee2118e701d35a15eb01563803459c2642257d1f))

## [1.3.9](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.8...v1.3.9) (2021-07-05)

### Bug Fixes

- **deps:** update dependency prettier to v2.3.2 ([266a261](https://github.com/NullVoxPopuli/eslint-configs/commit/266a261d0dfd48ab97667b0c88010118df61f750))

## [1.3.8](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.7...v1.3.8) (2021-07-05)

### Bug Fixes

- **deps:** update dependency eslint-plugin-qunit to v6.2.0 ([312f187](https://github.com/NullVoxPopuli/eslint-configs/commit/312f187b97e5cc4d5ef63f30d71bc3d4c1941076))

## [1.3.7](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.6...v1.3.7) (2021-07-05)

### Bug Fixes

- **deps:** update dependency eslint-plugin-import to ^2.23.4 ([58077af](https://github.com/NullVoxPopuli/eslint-configs/commit/58077afea7d563d41ebed7769582e18d05febf9b))

## [1.3.6](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.5...v1.3.6) (2021-07-05)

### Bug Fixes

- **deps:** update dependency eslint-plugin-ember to v10.5.1 ([65c4499](https://github.com/NullVoxPopuli/eslint-configs/commit/65c44996cc3c52393c319e662f52679376123118))

## [1.3.5](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.4...v1.3.5) (2021-07-05)

### Bug Fixes

- **deps:** update dependency eslint to v7.30.0 ([5523037](https://github.com/NullVoxPopuli/eslint-configs/commit/55230375ca41b6079f012cf926abed9550602d3b))

## [1.3.4](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.3...v1.3.4) (2021-07-05)

### Bug Fixes

- **deps:** update dependency eslint-plugin-decorator-position to v2.2.28 ([f8519e2](https://github.com/NullVoxPopuli/eslint-configs/commit/f8519e252ffe15ed944b3fa7c7127751e66eebf9))

## [1.3.3](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.2...v1.3.3) (2021-07-05)

### Bug Fixes

- **deps:** update dependency eslint-config-prettier to v8.3.0 ([6f20b18](https://github.com/NullVoxPopuli/eslint-configs/commit/6f20b18faaa71605abf67a932286f0b18d46cf06))

## [1.3.2](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.1...v1.3.2) (2021-05-29)

### Bug Fixes

- **deps:** update dependency eslint to v7.27.0 ([292b04e](https://github.com/NullVoxPopuli/eslint-configs/commit/292b04e92202d0d6912a8b4f1bc89e6d7a266e94))

## [1.3.1](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.3.0...v1.3.1) (2021-05-29)

### Bug Fixes

- **deps:** update dependency eslint-plugin-decorator-position to v2.2.27 ([e299703](https://github.com/NullVoxPopuli/eslint-configs/commit/e299703ce332a9ba764df16605d0f1f9435ac95b))

# [1.3.0](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.2.5...v1.3.0) (2021-05-29)

### Features

- **node:** add TS support ([3fdffca](https://github.com/NullVoxPopuli/eslint-configs/commit/3fdffca691341648d2a072bdf85ba0c786f478d5))

## [1.2.5](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.2.4...v1.2.5) (2021-04-15)

### Bug Fixes

- **deps:** update dependency eslint-plugin-prettier to v3.4.0 ([25fe627](https://github.com/NullVoxPopuli/eslint-configs/commit/25fe62764f07d73d79c9a2a5fdfb80bf11122111))

## [1.2.4](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.2.3...v1.2.4) (2021-04-15)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v4.22.0 ([83941e4](https://github.com/NullVoxPopuli/eslint-configs/commit/83941e43b3167cf94781d59b48ea920bb380d064))

## [1.2.3](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.2.2...v1.2.3) (2021-04-15)

### Bug Fixes

- **deps:** update dependency eslint-config-prettier to v8.2.0 ([cae92c9](https://github.com/NullVoxPopuli/eslint-configs/commit/cae92c92692986e3806e0c08dabdb5807e222e2a))

## [1.2.2](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.2.1...v1.2.2) (2021-04-12)

### Bug Fixes

- **partner:** issue with Limber -- test will be enabled after release ([bec0f75](https://github.com/NullVoxPopuli/eslint-configs/commit/bec0f75ef5e1486300db9f4f2e8f776e7a89e68b))

## [1.2.1](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.2.0...v1.2.1) (2021-04-11)

### Bug Fixes

- **deps:** update lint dependencies ([937beb2](https://github.com/NullVoxPopuli/eslint-configs/commit/937beb2b2ceb40971b77879375db6900063f5f3a))

# [1.2.0](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.1.4...v1.2.0) (2021-04-10)

### Features

- **node:** support mjs ([a008ddb](https://github.com/NullVoxPopuli/eslint-configs/commit/a008ddbb026af74aa9c27af66aa09a57e989c0a2))

## [1.1.4](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.1.3...v1.1.4) (2021-04-10)

### Bug Fixes

- **internal:** fix CI workflow definition ([64250a8](https://github.com/NullVoxPopuli/eslint-configs/commit/64250a83c9629dbcfbc3f9797977416eb93edc4f))

## [1.1.3](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.1.2...v1.1.3) (2021-04-10)

### Bug Fixes

- **node engines:** revert and fix node engines to 12 ([3dd41f0](https://github.com/NullVoxPopuli/eslint-configs/commit/3dd41f0ad2ed4dc7ea1a71d2b7ece17b8bcc5618))

## [1.1.2](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.1.1...v1.1.2) (2021-03-29)

### Bug Fixes

- **deps:** update lint dependencies ([a603f54](https://github.com/NullVoxPopuli/eslint-configs/commit/a603f54a441c83ed3f7b95cc44f7213965bab4b0))

## [1.1.1](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.1.0...v1.1.1) (2021-03-21)

### Bug Fixes

- **deps:** update lint dependencies ([db919d0](https://github.com/NullVoxPopuli/eslint-configs/commit/db919d01f7d997050d14d6917980c1bc691c3e06))

# [1.1.0](https://github.com/NullVoxPopuli/eslint-configs/compare/v1.0.0...v1.1.0) (2021-03-21)

### Features

- **ember:** add tailwind config entry to the list of node files for ember projects ([b066db3](https://github.com/NullVoxPopuli/eslint-configs/commit/b066db3bd7387adbda10096dde32529ddc711e3c))

# 1.0.0 (2021-03-20)

### Bug Fixes

- **internal:** ci workflows were still too specific to ember projects ([fc612e8](https://github.com/NullVoxPopuli/eslint-configs/commit/fc612e8783f88383a232cf5cae29c2b1e8b67c45))
- add prettier config ([9b9ba77](https://github.com/NullVoxPopuli/eslint-configs/commit/9b9ba77ef628ad44702b763d8cfa2047afa97d91))

### Features

- add files ([537d564](https://github.com/NullVoxPopuli/eslint-configs/commit/537d5648b4a78200012b6d1bcf24af20426eb0c5))
- setup ci ([222c05f](https://github.com/NullVoxPopuli/eslint-configs/commit/222c05f85146252da4a854c613d756adeb89fca3))
