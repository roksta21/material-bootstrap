<template>
    <div>
        <div class="bs-docs-section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="forms">Forms</h1>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="well bs-component">
                        <form class="">
                            <fieldset>
                                <legend>Legend</legend>

                                <div class="form-group">
                                    <input required="required" class="form-control" type="text">
                                    <label>Name</label>
                                </div>

                                <div class="form-group">
                                    <input required="required" class="form-control" type="password">
                                    <label>Password</label>
                                </div>

                                <div class="form-group">
                                    <input type="checkbox"> Checkbox
                                </div>

                                <div class="form-group">
                                    <textarea class=form-control></textarea>
                                    <label>Textarea</label>
                                    <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                                </div>

                                <div class="form-group">
                                    <input type="radio" name="radio_option"> Option 1
                                    <input type="radio" name="radio_option"> Option 2
                                </div>

                                <div class="form-group">
                                    <label for="select" class="col-lg-2 control-label">Selects</label>
                                    <select class="form-control" id="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <br>
                                    <select multiple="" class="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <div class="col-lg-10 col-lg-offset-2">
                                        <button type="reset" class="btn btn-default">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>

                <div class="col-lg-4 col-lg-offset-1">

                    <form class="bs-component">
                        <div class="form-group">
                            <input class="form-control" id="focusedInput" type="text" value="This is focused...">
                            <label class="control-label" for="focusedInput">Focused input</label>
                        </div>

                        <div class="form-group">
                            <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled="">
                            <label class="control-label" for="disabledInput">Disabled input</label>
                        </div>

                        <div class="form-group has-warning">
                            <input type="text" class="form-control" id="inputWarning">
                            <label class="control-label" for="inputWarning">Input warning</label>
                        </div>

                        <div class="form-group has-error">
                            <input type="text" class="form-control" id="inputError">
                            <label class="control-label" for="inputError">Input error</label>
                        </div>

                        <div class="form-group has-success">
                            <input type="text" class="form-control" id="inputSuccess">
                            <label class="control-label" for="inputSuccess">Input success</label>
                        </div>

                        <div class="form-group">
                            <input class="form-control input-lg" type="text" id="inputLarge">
                            <label class="control-label" for="inputLarge">Large input</label>
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control" id="inputDefault">
                            <label class="control-label" for="inputDefault">Default input</label>
                        </div>

                        <div class="form-group">
                            <input class="form-control input-sm" type="text" id="inputSmall">
                            <label class="control-label" for="inputSmall">Small input</label>
                        </div>

                        <div class="form-group">
                            <label class="control-label">Input addons</label>
                            <div class="input-group">
                                <span class="input-group-addon">$</span>
                                <input type="text" class="form-control">
                                <span class="input-group-btn">
                      <button class="btn btn-default" type="button">Button</button>
                    </span>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>