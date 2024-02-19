class _CsrfToken {
  private _value: string = ''

  public get value() {
    if (!this._value) throw new Error('csrf token is missing')
    return this._value
  }

  public set value(csrfToken: string) {
    // if (this._value && csrfToken !== this._value)
    //   throw new Error('csrf token already set')

    this._value = csrfToken
  }
}

const CsrfToken = new _CsrfToken()

export default CsrfToken
