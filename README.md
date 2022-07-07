# Buildversion
<p align="left">
  <a href="https://github.com/znqerz/buildversion-action"><img alt="buildversion-action status" src="https://github.com/znqerz/buildversion-action/workflows/build-test/badge.svg"></a>
</p>

This action provides the following functionality for GitHub Actions users:

- Get build version from version file.

# Usage

See [action.yml](action.yml)

**Basic:**
```yaml
steps:      
  - name: Checks-out repository code
    uses: actions/checkout@v2
  
  - name: Set build version
    uses: znqerz/buildversion-action@v0.1
    with:
      file-path: "${{ github.workspace }}/version.properties"
      run-number: "${{ github.run_number }}"
    id: BUILD_VERSION_NUMBER
    
  - run: |
      echo ${{ steps.BUILD_VERSION_NUMBER.outputs.build_number }}
```

The `file-path` input used to locate the "version.properties" file. 

version.properties
```text
major=0
minor=0
patch=2
```

The `run-number` input used to as the sub-number of the buildversion.


# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
