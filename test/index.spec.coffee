require './helpers'

describe "Todolist Item Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      "offcourse-component-todolist-item"
    ]
    { @Component, @spy} = mockModule moduleUnderTest, mockModules

  afterAll ->
    disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @collection = [
      id: 1
      title: 'Foo'
    ,
      id: 2
      title: 'Bar'
    ]
    @handleHover = ()->
    @handleTitleClick = ()->
    @handleCheckboxClick = ()->
    @parentId = undefined

  describe "general", ->
    When  -> 
      @subject  = renderElement @Component,
        { @collection, @parentId, @handleHover, @handleCheckboxClick, @handleTitleClick }
    Then  -> 
      @classes = @subject.className.split ' '
      @classes.includes "todolist"
    And   ->
      args1 = { item: @collection[0], @parentId, @handleHover, @handleTitleClick, @handleCheckboxClick }
      args2 = { item: @collection[1], @parentId, @handleHover, @handleTitleClick, @handleCheckboxClick }
      expect(@spy.getCall(0).args[0]).to.deep.equal(args1)
      expect(@spy.getCall(1).args[0]).to.deep.equal(args2)

  describe "with parent id", ->
    Given ->
      @spy.reset()
      @parentId = 1
    When  -> 
      @subject  = renderElement @Component,
        { @collection, @parentId, @handleHover, @handleCheckboxClick, @handleTitleClick }
    Then  -> 
      args1 = { item: @collection[0], @parentId, @handleHover, @handleTitleClick, @handleCheckboxClick }
      expect(@spy.getCall(0).args[0]).to.deep.equal(args1)
