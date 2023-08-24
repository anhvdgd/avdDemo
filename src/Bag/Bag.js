import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement } from '../actions/counterSlice';


function Bag(){
    const count = useSelector((state) => state.counter.items)
    const dispatch = useDispatch()
    console.log(count)
    return(
        <div style={{padding: '0 200px'}}>
            <h1>Bag</h1>
            <div>You have {count.length} items in your bag</div>
            <div>
                <h2>List of items</h2>
                <div>
                    {count.map((item, index) => {
                        return(
                        <div style={{display: 'flex', margin: 20, border: '1px solid black', borderRadius: 4}} key={`${index} itemPos`}>
                            <div style={{width: '80%'}}>
                                <div style={{display: 'flex' , justifyContent: 'space-between', marginRight: 10}}>
                                    <div>
                                        Product name:
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginRight: 10}}>
                                    <div>
                                        Color:
                                    </div>
                                    <div>
                                        {item.color}
                                    </div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginRight: 10}}>
                                    <div>
                                    Size:
                                    </div>
                                    <div>
                                        {item.size}
                                    </div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginRight: 10}}>
                                    <div>
                                        Price:
                                    </div>
                                    <div>
                                        {item.price}
                                    </div>
                                </div>
                            </div>
                            <div style={{width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <button style={{fontWeight: 700}}
                                onClick={() => dispatch(decrement(index))}
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Bag;